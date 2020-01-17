/* eslint-disable no-console */
const MAX_POINTS = 100; // Maximum awardable points if within threshold
const MAX_POINTS_THRESHOLD = 100000; // Meters
const MIN_POINTS_THRESHOLD = 2500000; // Meters
const MARKER_WIDTH = 40;
const MARKER_HEIGHT = 40;
const EMOJI_ANIMATE_TIME = 1500;
const EMOJI_ANIMATE_DISTANCE = 200;

const questionEl = $('#question');
const nextEl = $('#next');
const resultEl = $('#result');
const resultDistanceEl = $('#resultDistance');
const pointsEl = $('#points');
const textAnswerEl = $('#textAnswer');

// State management
let waitingForAnswer = false;
let lastMapType = null;
let currentQuestion = null;
let totalPoints = 0;
let userPoint = null;
let answerPoint = null;
let comparisonLine = null;
let answerMax = null;
let answerMin = null;
let previousQuestions = [];
let quizType = '';
let countdownMax = 10; // Seconds
let countdownTimeout = null;

// initialize the map on the "map" div with a given center and zoom
const map = L.map('map', {
  center: [0, 0],
  zoom: 2,
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
  maxZoom: 4,
  minZoom: 2,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1Ijoia2FsbGIxMjMiLCJhIjoiY2s1YjE5dW5hMHNwNjNscGt6OHRyejE1aSJ9.y-DJdkjTP2fo-Foe9qPUyw',
});

const satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 4,
  minZoom: 2,
  id: 'mapbox/satellite-v9',
  accessToken: 'pk.eyJ1Ijoia2FsbGIxMjMiLCJhIjoiY2s1YjE5dW5hMHNwNjNscGt6OHRyejE1aSJ9.y-DJdkjTP2fo-Foe9qPUyw',
});

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
    textAnswerEl.text(currentQuestion.textAnswer);
    textAnswerEl.removeClass('hide');
    // textAnswerEl.animate({ top: 0 }, 250, 'swing');
  }
}

function drawComparison(userAnswer, target) {
  answerPoint = L.marker(target, { icon: greenIcon });
  answerPoint.addTo(map);
  answerMin = L.circle(target, {
    radius: MIN_POINTS_THRESHOLD,
    fillColor: '#0095ff',
    fillOpacity: 0.2,
    opacity: 0,
  });
  answerMin.addTo(map);
  answerMax = L.circle(target, {
    radius: MAX_POINTS_THRESHOLD,
    fillColor: '#4ebd00',
    fillOpacity: 0.5,
    opacity: 0,
  });
  answerMax.addTo(map);
  if (userAnswer !== null) {
    userPoint = L.marker(userAnswer, { icon: blueIcon });
    userPoint.addTo(map);
    comparisonLine = L.polyline([userAnswer, target], {
      color: '#333',
      dashArray: '5, 10',
      opacity: 0.75,
    });
    comparisonLine.addTo(map);
  }
}

function answered() {
  questionEl.addClass('hidden');
  nextEl.removeClass('hidden');
}

const countdownEl = $('#countdown');
const countdownWrapperEl = $('#countdownWrapper');
function countdownComplete() {
  // Incorrect answer
  if (countdownTimeout) clearTimeout(countdownTimeout);
  waitingForAnswer = false;
  countdownWrapperEl.addClass('out');
  const answer = currentQuestion.estimate || currentQuestion.answers[0];
  const answerTarget = new L.LatLng(answer.lat, answer.lng);
  drawComparison(null, answerTarget);
  showTextAnswer();
  answered();
}

function countdownStop() {
  countdownEl.stop();
  if (countdownTimeout) clearTimeout(countdownTimeout);
}

function startCountdown() {
  countdownEl.css({ top: 0 });
  countdownEl.animate({ top: '100%' }, countdownMax * 1000, 'linear');
  countdownWrapperEl.removeClass('hide out');
  countdownTimeout = setTimeout(countdownComplete, countdownMax * 1000);
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
  questionEl.text(currentQuestion.question).removeClass('hidden');
  // switchMapType(currentQuestion.mapType);
  waitingForAnswer = true;
  startCountdown();
}

function startGame() {
  console.log('Starting game');
  askQuestion();
}

function quizTypeSelected() {
  $('#startSelect').addClass('hidden');
  startGame();
}

function difficultySelected() {
  $('#difficultySelect').addClass('hidden');

  questionTypes.forEach((item) => {
    $('#startSelect').append(`<a href="#start" id="${item.id}" class="startSelector bg-gray-300 mt-2 mr-2 p-2 rounded">${item.name}</a>`);
  });

  $('#startSelect a').click((e) => {
    e.preventDefault();
    quizType = $(e.target).attr('id');
    quizTypeSelected();
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
    difficultySelected();
  });
  $('#hard').click((e) => {
    e.preventDefault();
    switchToSat();
    difficultySelected();
  });

  $('#next').click((e) => {
    e.preventDefault();
    askQuestion();
  });
});

function checkAnswer(userAnswer) {
  console.log('Checking answer');
  const { answers } = currentQuestion;
  let bestMatch = 999999999999;
  let bestTarget = null;
  answers.forEach((item) => {
    switch (item.type) {
      case 'exact': {
        const target = new L.LatLng(item.lat, item.lng);
        const distance = target.distanceTo(userAnswer);
        // console.log(distance);
        if (distance < bestMatch) {
          bestMatch = distance;
          bestTarget = target;
        }
        break;
      }
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
  if (distance < MAX_POINTS_THRESHOLD) { // 100 km buffer
    return Math.round(MAX_POINTS);
  }
  if (distance > MIN_POINTS_THRESHOLD) {
    return 0;
  }
  return Math.round(MAX_POINTS * 0.8 * (1 - (distance - MAX_POINTS_THRESHOLD)
    / (MIN_POINTS_THRESHOLD - MAX_POINTS_THRESHOLD)));
}

function celebrateWithEmoji(points, coords) {
  let emoji = '';
  if (points >= MAX_POINTS) {
    // Max points!
    emoji = '&#128513;';
  } else if (points > 0) {
    // Some points
    emoji = '&#128578;';
  } else {
    // No points :/
    emoji = '&#128553;';
  }
  const newEmoji = $(`<div class="overEmoji">${emoji}</div>`);
  $('#emojiContainer').append(newEmoji);
  const startLocation = {
    x: coords.x - Math.round(newEmoji.outerWidth() / 2),
    y: coords.y - MARKER_HEIGHT,
  };
  console.log(newEmoji.outerWidth());
  newEmoji.offset({ top: startLocation.y, left: startLocation.x });
  newEmoji.animate({ top: startLocation.y - EMOJI_ANIMATE_DISTANCE, opacity: 0 }, EMOJI_ANIMATE_TIME, 'linear', () => {
    // Animation complete
    newEmoji.remove();
  });
}

function answerAttemped(latlng, screenCoords) {
  console.log('Answer attempted');
  // console.log(latlng);
  countdownStop();
  waitingForAnswer = false;
  const distance = Math.floor(checkAnswer(latlng));
  // console.log(distance);
  const points = distanceToPoints(distance);
  console.log(`Distance: ${distance}, Points: ${points}`);
  resultDistanceEl.text(`You were ${Math.round(distance / 1000)}km away`);
  resultDistanceEl.removeClass('hidden');
  resultEl.text(`You just scored ${points} points`);
  resultEl.removeClass('hidden');
  totalPoints += points;
  pointsEl.text(`Total points: ${totalPoints}`);
  pointsEl.removeClass('hidden');
  celebrateWithEmoji(points, screenCoords);
  showTextAnswer();
  answered();
  // askQuestion();
}

function onMapClick(e) {
  console.log(`You clicked the map at ${e.latlng}`);
  console.log(e);
  if (waitingForAnswer === true) {
    answerAttemped(e.latlng, e.containerPoint);
  }
}

// switchToStreet();

map.on('click', onMapClick);
