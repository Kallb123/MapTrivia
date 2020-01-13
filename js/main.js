/* eslint-disable no-console */
const MAX_POINTS = 100; // Maximum awardable points if within threshold
const MAX_POINTS_THRESHOLD = 100000; // Meters
const MIN_POINTS_THRESHOLD = 5000000; // Meters

const questionEl = $('#question');
const nextEl = $('#next');
const resultEl = $('#result');
const pointsEl = $('#points');

// State management
let waitingForAnswer = false;
let lastMapType = null;
let currentQuestion = null;
let totalPoints = 0;
let userPoint = null;
let answerPoint = null;
let comparisonLine = null;
let previousQuestions = [];
let quizType = '';

// initialize the map on the "map" div with a given center and zoom
const map = L.map('map', {
  center: [0, 0],
  zoom: 2,
  maxBounds: [[-90, -180], [90, 180]],
  maxBoundsViscosity: 1.0,
  noWrap: true,
});

const streetLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 4,
  minZoom: 1,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1Ijoia2FsbGIxMjMiLCJhIjoiY2s1YjE5dW5hMHNwNjNscGt6OHRyejE1aSJ9.y-DJdkjTP2fo-Foe9qPUyw',
});

const satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 4,
  minZoom: 1,
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
}

function askQuestion() {
  console.log('Asking question');
  cleanMap();
  nextEl.addClass('hidden');
  resultEl.addClass('hidden');
  const questionObj = pickRandomQuestion();
  currentQuestion = questionObj;
  questionEl.text(currentQuestion.question).removeClass('hidden');
  // switchMapType(currentQuestion.mapType);
  waitingForAnswer = true;
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

function drawComparison(answer, target) {
  userPoint = L.marker(answer);
  userPoint.addTo(map);
  answerPoint = L.marker(target);
  answerPoint.addTo(map);
  comparisonLine = L.polyline([answer, target], { color: 'red' }).addTo(map);
}

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

function answered() {
  nextEl.removeClass('hidden');
}

function answerAttemped(latlng) {
  console.log('Answer attempted');
  // console.log(latlng);
  questionEl.addClass('hidden');
  waitingForAnswer = false;
  const result = Math.floor(checkAnswer(latlng));
  // console.log(result);
  const points = distanceToPoints(result);
  console.log(`Distance: ${result}, Points: ${points}`);
  resultEl.text(`You just scored ${points} points`);
  resultEl.removeClass('hidden');
  totalPoints += points;
  pointsEl.text(`Total points: ${totalPoints}`);
  pointsEl.removeClass('hidden');
  answered();
  // askQuestion();
}

function onMapClick(e) {
  console.log(`You clicked the map at ${e.latlng}`);
  if (waitingForAnswer === true) {
    answerAttemped(e.latlng);
  }
}

// switchToStreet();

map.on('click', onMapClick);
