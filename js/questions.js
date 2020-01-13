const questionTypes = [
  {
    id: 'trivia',
    name: 'Trivia',
  },
  {
    id: 'cities',
    name: 'Cities of the World',
  },
  {
    id: 'landmarks',
    name: 'Landmarks',
  },
];

const questions = [
  {
    id: 0,
    question: 'Where is the Leaning Tower of Pisa?',
    mapType: 'street',
    type: 'landmarks',
    answers: [
      {
        type: 'exact',
        lat: 43.7230,
        lng: 10.3966,
      },
    ],
  },
  {
    id: 1,
    question: 'Where was The Titanic\'s wreckage found?',
    mapType: 'sat',
    type: 'trivia',
    answers: [
      {
        type: 'exact',
        lat: 41.726931,
        lng: -49.948253,
      },
    ],
  },
  {
    id: 2,
    question: 'Where is Machu Picchu?',
    mapType: 'sat',
    type: 'landmarks',
    answers: [
      {
        type: 'exact',
        lat: -13.1631,
        lng: -72.5450,
      },
    ],
  },
  {
    id: 3,
    question: 'Where would you have found Checkpoint Charlie?',
    mapType: 'sat',
    type: 'trivia',
    answers: [
      {
        type: 'exact',
        lat: 52.5074,
        lng: 13.3904,
      },
    ],
  },
  {
    id: 4,
    question: 'Where was the Battle of Hastings fought?',
    mapType: 'street',
    type: 'trivia',
    answers: [
      {
        type: 'exact',
        lat: 50.9072,
        lng: 0.4858,
      },
    ],
  },
  {
    id: 4,
    question: 'Where was the Battle of Gettysburg fought?',
    mapType: 'sat',
    type: 'trivia',
    answers: [
      {
        type: 'exact',
        lat: 39.8180,
        lng: -77.2325,
      },
    ],
  },
  {
    id: 5,
    question: 'Where is Mount Kilimanjaro?',
    mapType: 'sat',
    type: 'landmarks',
    answers: [
      {
        type: 'exact',
        lat: -3.0674,
        lng: 37.3556,
      },
    ],
  },
  {
    id: 6,
    question: 'Where is John F. Kennedy buried?',
    mapType: 'sat',
    type: 'trivia',
    answers: [
      {
        type: 'exact',
        lat: 38.8815,
        lng: -77.0715,
      },
    ],
  },
  {
    id: 7,
    question: 'Where is Easter Island?',
    mapType: 'sat',
    type: 'trivia',
    answers: [
      {
        type: 'exact',
        lat: -27.1127,
        lng: -109.3497,
      },
    ],
  },
  {
    id: 8,
    question: 'Where is London?',
    mapType: 'sat',
    type: 'cities',
    answers: [
      {
        type: 'exact',
        lat: 51.5074,
        lng: -0.1278,
      },
    ],
  },
  {
    id: 9,
    question: 'Where is Rio De Janeiro?',
    mapType: 'sat',
    type: 'cities',
    answers: [
      {
        type: 'exact',
        lat: -22.9068,
        lng: -43.1729,
      },
    ],
  },
];
