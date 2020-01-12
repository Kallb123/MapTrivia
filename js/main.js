/* eslint-disable no-console */
const questions = [
  {
    id: 0,
    question: 'Where is 1,1?',
    mapType: 'street',
    answers: [
      {
        type: 'exact',
        lat: 1,
        lng: 1,
      },
    ],
  },
  {
    id: 1,
    question: 'Where is 2,1?',
    mapType: 'sat',
    answers: [
      {
        type: 'exact',
        lat: 2,
        lng: 1,
      },
    ],
  },
];

const questionEl = $('#question');
const nextEl = $('#next');
const resultEl = $('#result');
const pointsEl = $('#points');

// State management
let waitingForAnswer = false;
let lastMapType = null;
let currentQuestion = null;
let totalPoints = 0;

// initialize the map on the "map" div with a given center and zoom
const map = L.map('map', {
  center: [0, 0],
  zoom: 2,
});

const streetLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 3,
  minZoom: 1,
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1Ijoia2FsbGIxMjMiLCJhIjoiY2s1YjE5dW5hMHNwNjNscGt6OHRyejE1aSJ9.y-DJdkjTP2fo-Foe9qPUyw',
});

const satLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 3,
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
  const randIndex = math.randomInt(questions.length);
  const randQuestion = questions[randIndex];
  return randQuestion;
}

function askQuestion() {
  console.log('Asking question');
  nextEl.addClass('hidden');
  resultEl.addClass('hidden');
  const questionObj = pickRandomQuestion();
  currentQuestion = questionObj;
  questionEl.text(currentQuestion.question).removeClass('hidden');
  switchMapType(currentQuestion.mapType);
  waitingForAnswer = true;
}

function startGame() {
  console.log('Starting game');
  askQuestion();
}

$(() => {
  console.log('Ready!');
  console.log(pickRandomQuestion());

  $('#start').click((e) => {
    e.preventDefault();
    startGame();
    $(e.target).remove();
  });
  $('#next').click((e) => {
    e.preventDefault();
    askQuestion();
  });
});

function checkAnswer(latlng) {
  console.log('Checking answer');
  const { answers } = currentQuestion;
  let bestMatch = 999999999999;
  answers.forEach((item) => {
    switch (item.type) {
      case 'exact':
        const answer = new L.LatLng(item.lat, item.lng);
        const distance = answer.distanceTo(latlng);
        // console.log(distance);
        if (distance < bestMatch) bestMatch = distance;
        break;
      default:
        console.error(`Don't understand this type of answer ${item.type}`);
        break;
    }
  });
  return bestMatch;
}

function distanceToPoints(distance) {
  return distance;
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
