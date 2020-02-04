/* eslint-disable no-console */
const MAX_POINTS = 100; // Maximum awardable points if within threshold
const MAX_POINTS_TIMER_THRESHOLD = 0.5;
const MARKER_WIDTH = 40;
const MARKER_HEIGHT = 40;
const EMOJI_ANIMATE_TIME = 1500;
const EMOJI_ANIMATE_DISTANCE = 200;
const EMOJIS_GREAT = ['&#128513;', '&#127881;', '&#127882;'];
const EMOJIS_GOOD = ['&#128578;', '&#128077;'];
const EMOJIS_BAD = ['&#128553;', '&#128169;'];
const COUNTDOWN_INTERVAL = 1000;

const questionEl = $('#question');
const topicListEl = $('#topicList');
const nextEl = $('#next');
const resultEl = $('#result');
const resultDistanceEl = $('#resultDistance');
const pointsEl = $('#points');
const textAnswerEl = $('#textAnswer');
const countdownEl = $('#countdown');
const countdownTimerEl = $('#countdownTimer');
const countdownWrapperEl = $('#countdownWrapper');
const countdownSideWrapperEl = $('#countdownSideWrapper');

const MDC = new showdown.Converter();

// State management
let waitingForAnswer = false;
let lastMapType = null;
let currentQuestion = null;
let totalPoints = 0;
let totalPointsMax = 0;
let userPoint = null;
let answerPoint = null;
let comparisonLine = null;
let answerMax = null;
let answerMin = null;
let previousQuestions = [];
let quizType = '';
let countdownMax = 10; // Seconds
let countdownTimer = 0;
let countdownTimeout = null;
let countdownInterval = null;
let maxPointsThreshold = 100000; // Meters
let minPointsThreshold = 2500000; // Meters
let questionStartTime = null;

// initialize the map on the "map" div with a given center and zoom
const map = L.map('map', {
  center: [0, 0],
  zoom: 2,
  minZoom: 2,
  maxZoom: 2,
  maxBounds: [[-90, -180], [90, 180]],
  maxBoundsViscosity: 1.0,
  noWrap: true,
});

const greenIcon = L.icon({
  iconUrl: 'img/markergreen.png',
  shadowUrl: 'img/markershadow.png',

  iconSize: [MARKER_WIDTH, MARKER_HEIGHT], // size of the icon
  shadowSize: [MARKER_WIDTH, MARKER_HEIGHT], // size of the shadow
  iconAnchor: [Math.round(MARKER_WIDTH / 2), MARKER_HEIGHT], // point of the icon which will correspond to marker's location
  shadowAnchor: [13, MARKER_HEIGHT], // the same for the shadow
  popupAnchor: [Math.round(MARKER_WIDTH / 2), 0], // point from which the popup should open relative to the iconAnchor
});

const blueIcon = L.icon({
  iconUrl: 'img/markerblue.png',
  shadowUrl: 'img/markershadow.png',

  iconSize: [MARKER_WIDTH, MARKER_HEIGHT], // size of the icon
  shadowSize: [MARKER_WIDTH, MARKER_HEIGHT], // size of the shadow
  iconAnchor: [Math.round(MARKER_WIDTH / 2), MARKER_HEIGHT], // point of the icon which will correspond to marker's location
  shadowAnchor: [13, MARKER_HEIGHT], // the same for the shadow
  popupAnchor: [Math.round(MARKER_WIDTH / 2), 0], // point from which the popup should open relative to the iconAnchor
});

const streetLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1Ijoia2FsbGIxMjMiLCJhIjoiY2s1YjE5dW5hMHNwNjNscGt6OHRyejE1aSJ9.y-DJdkjTP2fo-Foe9qPUyw',
});

const satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/satellite-v9',
  accessToken: 'pk.eyJ1Ijoia2FsbGIxMjMiLCJhIjoiY2s1YjE5dW5hMHNwNjNscGt6OHRyejE1aSJ9.y-DJdkjTP2fo-Foe9qPUyw',
});
map.addLayer(satLayer);

function switchToSat() {
  map.removeLayer(streetLayer);
  map.addLayer(satLayer);
}

function switchToStreet() {
  map.removeLayer(satLayer);
  map.addLayer(streetLayer);
}

function switchMapType(type) {
  if (type !== lastMapType) {
    switch (type) {
      case 'street':
        switchToStreet();
        break;
      case 'sat':
        switchToSat();
        break;
      default:
        console.error('This question\'s map type is not supported', questionObj.maptype);
        break;
    }
    lastMapType = type;
  }
}

// function pairwise(arr, func) {
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     func(arr[i], arr[i + 1]);
//   }
// }

// pairwise(arr, function(current, next){
//   console.log(current, next)
// })

function pickRandomQuestion() {
  let filteredQuestions = questions.filter((item) => !previousQuestions.includes(item.id) && item.type === quizType);
  if (filteredQuestions.length === 0) {
    previousQuestions = [];
    filteredQuestions = questions.filter((item) => !previousQuestions.includes(item.id) && item.type === quizType);
  }
  const randIndex = math.randomInt(filteredQuestions.length);
  const randQuestion = filteredQuestions[randIndex];
  previousQuestions.push(randQuestion.id);
  return randQuestion;
}

function cleanMap() {
  if (userPoint) {
    map.removeLayer(userPoint);
  }
  if (answerPoint) {
    map.removeLayer(answerPoint);
  }
  if (comparisonLine) {
    map.removeLayer(comparisonLine);
  }
  if (answerMax) {
    map.removeLayer(answerMax);
  }
  if (answerMin) {
    map.removeLayer(answerMin);
  }
}

function showTextAnswer() {
  if (currentQuestion.textAnswer) {
    // textAnswerEl.offset({ top: -100 });
    textAnswerEl.html(MDC.makeHtml(currentQuestion.textAnswer));
    textAnswerEl.find('a').attr('target', '_blank');
    textAnswerEl.removeClass('hide');
    // textAnswerEl.animate({ top: 0 }, 250, 'swing');
  }
}

function drawComparison(userAnswer, target) {
  switch (target.type) {
    case 'exact': {
      const targetLL = new L.LatLng(target.lat, target.lng);
      answerPoint = L.marker(targetLL, { icon: greenIcon });
      answerPoint.addTo(map);
      answerMin = L.circle(targetLL, {
        radius: minPointsThreshold,
        fillColor: '#0095ff',
        fillOpacity: 0.2,
        opacity: 0,
      });
      answerMin.addTo(map);
      answerMax = L.circle(targetLL, {
        radius: maxPointsThreshold,
        fillColor: '#4ebd00',
        fillOpacity: 0.5,
        opacity: 0,
      });
      answerMax.addTo(map);
      if (userAnswer !== null) {
        comparisonLine = L.polyline([userAnswer, targetLL], {
          color: '#333',
          dashArray: '5, 10',
          opacity: 0.75,
        });
        comparisonLine.addTo(map);
      }
      break;
    }
    case 'polygon': {
      // Draw the polygon!
      answerPoint = new L.Polygon(target.corners, { color: 'green' });
      answerPoint.addTo(map);
      break;
    }
    default:
      // Don't render this one!
      break;
  }
  if (userAnswer !== null) {
    userPoint = L.marker(userAnswer, { icon: blueIcon });
    userPoint.addTo(map);
  }
}

function celebrateWithEmoji(points, coords) {
  let emoji = '';
  if (points >= MAX_POINTS) {
    // Max points!
    emoji = EMOJIS_GREAT[math.randomInt(EMOJIS_GREAT.length)];
  } else if (points > 0) {
    // Some points
    emoji = EMOJIS_GOOD[math.randomInt(EMOJIS_GOOD.length)];
  } else {
    // No points :/
    emoji = EMOJIS_BAD[math.randomInt(EMOJIS_BAD.length)];
  }
  if (coords) {
    const newEmoji = $(`<div class="overEmoji">${emoji}</div>`);
    $('#emojiContainer').append(newEmoji);
    const startLocation = {
      x: coords.x - Math.round(newEmoji.outerWidth() / 2),
      y: coords.y - MARKER_HEIGHT,
    };
    // console.log(newEmoji.outerWidth());
    newEmoji.offset({ top: startLocation.y, left: startLocation.x });
    newEmoji.animate({ top: startLocation.y - EMOJI_ANIMATE_DISTANCE, opacity: 0 }, EMOJI_ANIMATE_TIME, 'linear', () => {
      // Animation complete
      newEmoji.remove();
    });
  }
  return emoji;
}

function answered(points, coords) {
  const emoji = celebrateWithEmoji(points, coords);
  resultEl.html(`You just scored ${points} points ${emoji}`);
  resultEl.removeClass('hidden');
  totalPoints += points;
  totalPointsMax += MAX_POINTS;
  pointsEl.text(`Total points: ${totalPoints}/${totalPointsMax}`);
  pointsEl.removeClass('hidden');
  showTextAnswer();
  questionEl.addClass('hide');
  nextEl.removeClass('hidden');
}

function countdownIntervalCallback() {
  countdownTimer -= COUNTDOWN_INTERVAL;
  if (countdownTimer < 0) countdownTimer = 0;
  countdownTimerEl.text(Math.round(countdownTimer / 1000));
  countdownTimerEl.removeClass('hide out');
}

function countdownComplete() {
  // Incorrect answer
  if (countdownTimeout) clearTimeout(countdownTimeout);
  if (countdownInterval) clearInterval(countdownInterval);
  countdownIntervalCallback();
  waitingForAnswer = false;
  countdownWrapperEl.addClass('out');
  const answer = currentQuestion.estimate || currentQuestion.answers[0];
  drawComparison(null, answer);
  showTextAnswer();
  answered(0, null);
}

function countdownStop() {
  countdownEl.stop();
  if (countdownTimeout) clearTimeout(countdownTimeout);
  if (countdownInterval) clearInterval(countdownInterval);
}

function startCountdown() {
  countdownEl.css({ top: 0, backgroundColor: '#fff' });
  countdownEl.animate({ top: '100%', backgroundColor: '#f00' }, countdownMax * 1000, 'linear');
  countdownWrapperEl.removeClass('out');
  countdownSideWrapperEl.removeClass('hide');
  countdownTimeout = setTimeout(countdownComplete, countdownMax * 1000);
  countdownTimer = countdownMax * 1000 + COUNTDOWN_INTERVAL;
  countdownIntervalCallback();
  countdownInterval = setInterval(countdownIntervalCallback, COUNTDOWN_INTERVAL);
  questionStartTime = new Date();
}

function askQuestion() {
  console.log('Asking question');
  cleanMap();
  nextEl.addClass('hidden');
  textAnswerEl.addClass('hide');
  // textAnswerEl.css({ opacity: 0 });
  resultEl.addClass('hidden');
  resultDistanceEl.addClass('hidden');
  const questionObj = pickRandomQuestion();
  currentQuestion = questionObj;
  questionEl.text(currentQuestion.question).removeClass('hide');
  // switchMapType(currentQuestion.mapType);
  waitingForAnswer = true;
  startCountdown();
}

function startGame() {
  console.log('Starting game');
  askQuestion();
}

function quizTypeSelected(type) {
  $('#startSelect').addClass('hidden');
  maxPointsThreshold = type.maxPointsThresh;
  minPointsThreshold = type.minPointsThresh;
  startGame();
}

let mapMoveTimeout = null;
function quizTypeHover(type) {
  console.log('Hovering!');
  map.setMaxBounds([[-90, -180], [90, 180]]);
  map.setMinZoom(0);
  map.setMaxZoom(20);
  // map.setView(type.mapCentre, type.mapZoom);
  // map.setMaxBounds(type.mapBounds);
  map.fitBounds(type.mapOptions.mapBounds, { maxZoom: type.mapOptions.mapMaxZoom });
  if (mapMoveTimeout) clearTimeout(mapMoveTimeout);
  mapMoveTimeout = setTimeout(() => {
    map.setMinZoom(type.mapOptions.mapMinZoom);
    map.setMaxZoom(type.mapOptions.mapMaxZoom);
    map.setMaxBounds(type.mapOptions.mapBounds);
  }, 300);

  // setTimeout(() => map.setView(type.mapCentre, type.mapZoom), 100);
}

function difficultySelected() {
  $('#difficultySelect').addClass('hidden');

  questionTypes.forEach((item) => {
    topicListEl.append(`<a href="#start" id="${item.id}" class="startSelector bg-gray-300 mb-4 p-2 rounded">${item.name}</a>`);
  });

  $('#startSelect a').click((e) => {
    e.preventDefault();
    quizType = $(e.target).attr('id');
    const quizTypeObj = questionTypes.find((item) => item.id === quizType);
    quizTypeSelected(quizTypeObj);
  });
  $('#startSelect a').mouseenter((e) => {
    const hoverQuizTypeID = $(e.target).attr('id');
    const hoverQuizType = questionTypes.find((item) => item.id === hoverQuizTypeID);
    quizTypeHover(hoverQuizType);
  });
  $('#startSelect').removeClass('hidden');
}

$(() => {
  console.log('Ready!');
  // console.log(pickRandomQuestion());

  $('#start').click((e) => {
    e.preventDefault();
    startGame();
    $(e.target).remove();
  });

  $('#easy').click((e) => {
    e.preventDefault();
    switchToStreet();
    countdownMax *= 2;
    difficultySelected();
  });
  $('#medium').click((e) => {
    e.preventDefault();
    switchToStreet();
    difficultySelected();
  });
  $('#hard').click((e) => {
    e.preventDefault();
    switchToSat();
    difficultySelected();
  });

  $('#easy').hover(() => {
    switchMapType('street');
  });
  $('#medium').hover(() => {
    switchMapType('street');
  });
  $('#hard').hover(() => {
    switchMapType('sat');
  });

  $('#next').click((e) => {
    e.preventDefault();
    askQuestion();
  });
});

function isPointInsidePolygon(point, polyPoints) {
  const x = point.lat;
  const y = point.lng;

  let inside = false;
  for (let i = 0, j = polyPoints.length - 1; i < polyPoints.length; j = i++) {
    const xi = polyPoints[i].lat;
    const yi = polyPoints[i].lng;
    const xj = polyPoints[j].lat;
    const yj = polyPoints[j].lng;

    const intersect = ((yi > y) !== (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }

  return inside;
}

function vlen(vector) {
  return Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1]);
}
function vsub(v1, v2) {
  return [v1[0] - v2[0], v1[1] - v2[1]];
}
function vscale(vector, factor) {
  return [vector[0] * factor, vector[1] * factor];
}
function vnorm(v) {
  return [-v[1], v[0]];
}

// Not really designed to work on a sphere with lat/lng
// Gives nonsensical answer
function distanceFromPointToPoly(point, poly) {
  const dists = $.map(poly, (p1, i) => {
    const prev = (i === 0 ? poly.length : i) - 1;
    const p2 = poly[prev];
    const line = vsub(p2, p1);

    if (vlen(line) === 0) {
      return vlen(vsub(point, p1));
    }

    const norm = vnorm(line);
    const x1 = point[0];
    const x2 = norm[0];
    const x3 = p1[0];
    const x4 = line[0];
    const y1 = point[1];
    const y2 = norm[1];
    const y3 = p1[1];
    const y4 = line[1];

    const j = (x3 - x1 - x2 * y3 / y2 + x2 * y1 / y2) / (x2 * y4 / y2 - x4);

    if (j < 0 || j > 1) {
      return Math.min(vlen(vsub(point, p1)), vlen(vsub(point, p2)));
    }

    const i2 = (y3 + j * y4 - y1) / y2;

    return vlen(vscale(norm, i2));
  });

  return Math.min.apply(null, dists);
}

function checkAnswer(userAnswer) {
  console.log('Checking answer');
  const { answers } = currentQuestion;
  let bestMatch = 999999999999;
  let bestTarget = answers[0];
  answers.forEach((item) => {
    switch (item.type) {
      case 'exact': {
        const target = new L.LatLng(item.lat, item.lng);
        const distance = target.distanceTo(userAnswer);
        // console.log(distance);
        if (distance < bestMatch) {
          bestMatch = distance;
          bestTarget = item;
        }
        break;
      }
      case 'polygon':
        if (isPointInsidePolygon(userAnswer, item.corners) === true) {
          bestMatch = 0;
          bestTarget = item;
        } else {
          // TODO: Find how far away
          const polygonArray = item.corners.map((polyItem) => [polyItem.lat, polyItem.lng]);
          const distance = distanceFromPointToPoly([userAnswer.lat, userAnswer.lng], polygonArray);
          console.log(distance);
          // if (distance < bestMatch) {
          //   bestMatch = distance;
          //   bestTarget = item;
          // }
        }
        break;
      default: {
        console.error(`Don't understand this type of answer ${item.type}`);
        break;
      }
    }
  });
  drawComparison(userAnswer, bestTarget);
  return bestMatch;
}

function distanceToPoints(distance) {
  if (distance < maxPointsThreshold) { // 100 km buffer
    return Math.round(MAX_POINTS);
  }
  if (distance > minPointsThreshold) {
    return 0;
  }
  return Math.round(MAX_POINTS * 0.8 * (1 - (distance - maxPointsThreshold)
    / (minPointsThreshold - maxPointsThreshold)));
}

function scalePointsToTime(currentPoints, secondsToAnswer) {
  const secondsAfterThresh = secondsToAnswer - (countdownMax * MAX_POINTS_TIMER_THRESHOLD);
  if (secondsAfterThresh <= 0) return currentPoints;
  const x = countdownMax - (countdownMax * MAX_POINTS_TIMER_THRESHOLD);
  const pointMultiplier = (x - secondsAfterThresh) / x;
  return Math.round(currentPoints * pointMultiplier);
}

function answerAttemped(latlng, screenCoords) {
  console.log('Answer attempted');
  // console.log(latlng);
  countdownStop();
  const secondsToAnswer = (new Date() - questionStartTime) / 1000;
  waitingForAnswer = false;
  const distance = Math.floor(checkAnswer(latlng));
  // console.log(distance);
  let points = distanceToPoints(distance);
  points = scalePointsToTime(points, secondsToAnswer);
  console.log(`Distance: ${distance}, Points: ${points}`);
  resultDistanceEl.html(`You were ${Math.round(distance / 1000)}km away`);
  resultDistanceEl.removeClass('hidden');
  answered(points, screenCoords);
  // askQuestion();
}

function onMapClick(e) {
  // console.log(`You clicked the map at ${e.latlng}`);
  // console.log(e);
  if (waitingForAnswer === true) {
    answerAttemped(e.latlng, e.containerPoint);
  }
}

// switchToStreet();

map.on('click', onMapClick);
