const questionTypes = [
  {
    id: 'trivia',
    name: 'Trivia',
    mapOptions: {
      mapMaxZoom: 4,
      mapMinZoom: 2,
      mapBounds: [[-90, -180], [90, 180]],
    },
    maxPointsThresh: 100000,
    minPointsThresh: 2500000,
  },
  {
    id: 'cities',
    name: 'Cities of the World',
    mapOptions: {
      mapMaxZoom: 4,
      mapMinZoom: 2,
      mapBounds: [[-90, -180], [90, 180]],
    },
    maxPointsThresh: 100000,
    minPointsThresh: 2500000,
  },
  {
    id: 'landmarks',
    name: 'Landmarks',
    mapOptions: {
      mapMaxZoom: 4,
      mapMinZoom: 2,
      mapBounds: [[-90, -180], [90, 180]],
    },
    maxPointsThresh: 100000,
    minPointsThresh: 2500000,
  },
  {
    id: 'ukcities',
    name: 'Cities of the UK',
    mapOptions: {
      mapMaxZoom: 7,
      mapMinZoom: 4,
      mapBounds: [[49.09, -8.83], [61.66, 2.56]],
    },
    maxPointsThresh: 50000,
    minPointsThresh: 150000,
  },
  {
    id: 'test',
    name: 'Test',
    mapOptions: {
      mapMaxZoom: 4,
      mapMinZoom: 2,
      mapBounds: [[-90, -180], [90, 180]],
    },
    maxPointsThresh: 100000,
    minPointsThresh: 2500000,
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
    textAnswer: 'It was the most famous checkpoint through the Berlin Wall',
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
    textAnswer: 'Fought in 1066 between William The Conqueror and King Harold Godwinson',
    answers: [
      {
        type: 'exact',
        lat: 50.9072,
        lng: 0.4858,
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
    textAnswer: 'The former president is buried in Arlington National Cemetery',
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
    question: 'Where was the Battle of Gettysburg fought?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'Fought in 1863, considered the turning point of the American Civil War',
    answers: [
      {
        type: 'exact',
        lat: 39.8180,
        lng: -77.2325,
      },
    ],
  },
  {
    id: 9,
    question: 'Where is the UK?',
    mapType: 'sat',
    type: 'test',
    textAnswer: 'Fought in 1863, considered the turning point of the American Civil War',
    answers: [
      {
        type: 'polygon',
        corners: [
          {
            lat: 49.911616,
            lng: -6.163449,
          },
          {
            lat: 54.177868,
            lng: -9.853205,
          },
          {
            lat: 60.853472,
            lng: -0.795731,
          },
          {
            lat: 51.261913,
            lng: 1.485379,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    question: 'Where is Tokyo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 35.685, lng: 139.7514 }],
  },
  {
    id: 12,
    question: 'Where is New York?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.6943, lng: -73.9249 }],
  },
  {
    id: 13,
    question: 'Where is Mexico City?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 19.4424, lng: -99.131 }],
  },
  {
    id: 14,
    question: 'Where is Mumbai?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 19.017, lng: 72.857 }],
  },
  {
    id: 15,
    question: 'Where is Sao Paulo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -23.5587, lng: -46.625 }],
  },
  {
    id: 16,
    question: 'Where is Delhi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 28.67, lng: 77.23 }],
  },
  {
    id: 17,
    question: 'Where is Shanghai?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 31.2165, lng: 121.4365 }],
  },
  {
    id: 18,
    question: 'Where is Kolkata?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.495, lng: 88.3247 }],
  },
  {
    id: 19,
    question: 'Where is Los Angeles?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.1139, lng: -118.4068 }],
  },
  {
    id: 20,
    question: 'Where is Dhaka?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 23.7231, lng: 90.4086 }],
  },
  {
    id: 21,
    question: 'Where is Buenos Aires?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -34.6025, lng: -58.3975 }],
  },
  {
    id: 22,
    question: 'Where is Karachi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 24.87, lng: 66.99 }],
  },
  {
    id: 23,
    question: 'Where is Cairo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 30.05, lng: 31.25 }],
  },
  {
    id: 24,
    question: 'Where is Rio de Janeiro?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -22.925, lng: -43.225 }],
  },
  {
    id: 25,
    question: 'Where is Osaka?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.75, lng: 135.4601 }],
  },
  {
    id: 26,
    question: 'Where is Beijing?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 39.9289, lng: 116.3883 }],
  },
  {
    id: 27,
    question: 'Where is Manila?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 14.6042, lng: 120.9822 }],
  },
  {
    id: 28,
    question: 'Where is Moscow?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 55.7522, lng: 37.6155 }],
  },
  {
    id: 29,
    question: 'Where is Istanbul?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 41.105, lng: 29.01 }],
  },
  {
    id: 30,
    question: 'Where is Paris?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 48.8667, lng: 2.3333 }],
  },
  {
    id: 31,
    question: 'Where is Seoul?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 37.5663, lng: 126.9997 }],
  },
  {
    id: 32,
    question: 'Where is Lagos?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 6.4433, lng: 3.3915 }],
  },
  {
    id: 33,
    question: 'Where is Jakarta?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -6.1744, lng: 106.8294 }],
  },
  {
    id: 34,
    question: 'Where is Guangzhou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 23.145, lng: 113.325 }],
  },
  {
    id: 35,
    question: 'Where is Chicago?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 41.8373, lng: -87.6862 }],
  },
  {
    id: 36,
    question: 'Where is London?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 51.5, lng: -0.1167 }],
  },
  {
    id: 37,
    question: 'Where is Lima?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -12.048, lng: -77.0501 }],
  },
  {
    id: 38,
    question: 'Where is Tehran?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 35.6719, lng: 51.4243 }],
  },
  {
    id: 39,
    question: 'Where is Kinshasa?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -4.3297, lng: 15.315 }],
  },
  {
    id: 40,
    question: 'Where is Bogota?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 4.5964, lng: -74.0833 }],
  },
  {
    id: 41,
    question: 'Where is Shenzhen?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.5524, lng: 114.1221 }],
  },
  {
    id: 42,
    question: 'Where is Wuhan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 30.58, lng: 114.27 }],
  },
  {
    id: 43,
    question: 'Where is Hong Kong?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.305, lng: 114.185 }],
  },
  {
    id: 44,
    question: 'Where is Tianjin?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 39.13, lng: 117.2 }],
  },
  {
    id: 45,
    question: 'Where is Chennai?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 13.09, lng: 80.28 }],
  },
  {
    id: 46,
    question: 'Where is Taipei?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 25.0358, lng: 121.5683 }],
  },
  {
    id: 47,
    question: 'Where is Bengaluru?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 12.97, lng: 77.56 }],
  },
  {
    id: 48,
    question: 'Where is Bangkok?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 13.75, lng: 100.5166 }],
  },
  {
    id: 49,
    question: 'Where is Lahore?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 31.56, lng: 74.35 }],
  },
  {
    id: 50,
    question: 'Where is Chongqing?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 29.565, lng: 106.595 }],
  },
  {
    id: 51,
    question: 'Where is Miami?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 25.7839, lng: -80.2102 }],
  },
  {
    id: 52,
    question: 'Where is Hyderabad?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 17.4, lng: 78.48 }],
  },
  {
    id: 53,
    question: 'Where is Dallas?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 32.7936, lng: -96.7662 }],
  },
  {
    id: 54,
    question: 'Where is Santiago?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -33.45, lng: -70.667 }],
  },
  {
    id: 55,
    question: 'Where is Philadelphia?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.0077, lng: -75.1339 }],
  },
  {
    id: 56,
    question: 'Where is Belo Horizonte?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -19.915, lng: -43.915 }],
  },
  {
    id: 57,
    question: 'Where is Madrid?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.4, lng: -3.6834 }],
  },
  {
    id: 58,
    question: 'Where is Houston?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 29.7869, lng: -95.3905 }],
  },
  {
    id: 59,
    question: 'Where is Ahmadabad?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 23.0301, lng: 72.58 }],
  },
  {
    id: 60,
    question: 'Where is Ho Chi Minh City?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 10.78, lng: 106.695 }],
  },
  {
    id: 61,
    question: 'Where is Washington?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 38.9047, lng: -77.0163 }],
  },
  {
    id: 62,
    question: 'Where is Atlanta?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.7627, lng: -84.4225 }],
  },
  {
    id: 63,
    question: 'Where is Toronto?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 43.7, lng: -79.42 }],
  },
  {
    id: 64,
    question: 'Where is Singapore?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 1.293, lng: 103.8558 }],
  },
  {
    id: 65,
    question: 'Where is Luanda?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -8.8383, lng: 13.2344 }],
  },
  {
    id: 66,
    question: 'Where is Baghdad?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.3386, lng: 44.3939 }],
  },
  {
    id: 67,
    question: 'Where is Barcelona?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 41.3833, lng: 2.1834 }],
  },
  {
    id: 68,
    question: 'Where is Haora?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.5804, lng: 88.3299 }],
  },
  {
    id: 69,
    question: 'Where is Shenyang?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 41.805, lng: 123.45 }],
  },
  {
    id: 70,
    question: 'Where is Khartoum?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 15.5881, lng: 32.5342 }],
  },
  {
    id: 71,
    question: 'Where is Pune?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 18.53, lng: 73.85 }],
  },
  {
    id: 72,
    question: 'Where is Boston?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 42.3188, lng: -71.0846 }],
  },
  {
    id: 73,
    question: 'Where is Sydney?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -33.92, lng: 151.1852 }],
  },
  {
    id: 74,
    question: 'Where is Saint Petersburg?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 59.939, lng: 30.316 }],
  },
  {
    id: 75,
    question: 'Where is Chittagong?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.33, lng: 91.8 }],
  },
  {
    id: 76,
    question: 'Where is Dongguan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 23.0489, lng: 113.7447 }],
  },
  {
    id: 77,
    question: 'Where is Riyadh?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 24.6408, lng: 46.7727 }],
  },
  {
    id: 78,
    question: 'Where is Hanoi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 21.0333, lng: 105.85 }],
  },
  {
    id: 79,
    question: 'Where is Guadalajara?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 20.67, lng: -103.33 }],
  },
  {
    id: 80,
    question: 'Where is Melbourne?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -37.82, lng: 144.975 }],
  },
  {
    id: 81,
    question: 'Where is Alexandria?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 31.2, lng: 29.95 }],
  },
  {
    id: 82,
    question: 'Where is Chengdu?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 30.67, lng: 104.07 }],
  },
  {
    id: 83,
    question: 'Where is Rangoon?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 16.7834, lng: 96.1667 }],
  },
  {
    id: 84,
    question: 'Where is Phoenix?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.5722, lng: -112.0891 }],
  },
  {
    id: 85,
    question: "Where is Xi'an?",
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.275, lng: 108.895 }],
  },
  {
    id: 86,
    question: 'Where is Porto Alegre?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -30.05, lng: -51.2 }],
  },
  {
    id: 87,
    question: 'Where is Surat?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 21.2, lng: 72.84 }],
  },
  {
    id: 88,
    question: 'Where is Hechi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 23.0965, lng: 109.6091 }],
  },
  {
    id: 89,
    question: 'Where is Abidjan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 5.32, lng: -4.04 }],
  },
  {
    id: 90,
    question: 'Where is Brasilia?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -15.7833, lng: -47.9161 }],
  },
  {
    id: 91,
    question: 'Where is Ankara?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 39.9272, lng: 32.8644 }],
  },
  {
    id: 92,
    question: 'Where is Monterrey?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 25.67, lng: -100.33 }],
  },
  {
    id: 93,
    question: 'Where is Yokohama?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 35.32, lng: 139.58 }],
  },
  {
    id: 94,
    question: 'Where is Nanjing?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 32.05, lng: 118.78 }],
  },
  {
    id: 95,
    question: 'Where is Montreal?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 45.5, lng: -73.5833 }],
  },
  {
    id: 96,
    question: 'Where is Guiyang?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 26.58, lng: 106.72 }],
  },
  {
    id: 97,
    question: 'Where is Recife?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -8.0756, lng: -34.9156 }],
  },
  {
    id: 98,
    question: 'Where is Seattle?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 47.6211, lng: -122.3244 }],
  },
  {
    id: 99,
    question: 'Where is Harbin?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 45.75, lng: 126.65 }],
  },
  {
    id: 100,
    question: 'Where is San Francisco?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 37.7562, lng: -122.443 }],
  },
  {
    id: 101,
    question: 'Where is Fortaleza?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -3.75, lng: -38.58 }],
  },
  {
    id: 102,
    question: 'Where is Zhangzhou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 24.5204, lng: 117.67 }],
  },
  {
    id: 103,
    question: 'Where is Detroit?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 42.3834, lng: -83.1024 }],
  },
  {
    id: 104,
    question: 'Where is Salvador?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -12.97, lng: -38.48 }],
  },
  {
    id: 105,
    question: 'Where is Busan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 35.0951, lng: 129.01 }],
  },
  {
    id: 106,
    question: 'Where is Johannesburg?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -26.17, lng: 28.03 }],
  },
  {
    id: 107,
    question: 'Where is Berlin?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 52.5218, lng: 13.4015 }],
  },
  {
    id: 108,
    question: 'Where is Algiers?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.7631, lng: 3.0506 }],
  },
  {
    id: 109,
    question: 'Where is Rome?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 41.896, lng: 12.4833 }],
  },
  {
    id: 110,
    question: 'Where is Pyongyang?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 39.0194, lng: 125.7547 }],
  },
  {
    id: 111,
    question: 'Where is Medellin?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 6.275, lng: -75.575 }],
  },
  {
    id: 112,
    question: 'Where is Kabul?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.5167, lng: 69.1833 }],
  },
  {
    id: 113,
    question: 'Where is Athens?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 37.9833, lng: 23.7333 }],
  },
  {
    id: 114,
    question: 'Where is Nagoya?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 35.155, lng: 136.915 }],
  },
  {
    id: 115,
    question: 'Where is Cape Town?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -33.92, lng: 18.435 }],
  },
  {
    id: 116,
    question: 'Where is San Diego?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 32.8312, lng: -117.1225 }],
  },
  {
    id: 117,
    question: 'Where is Changchun?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 43.865, lng: 125.34 }],
  },
  {
    id: 118,
    question: 'Where is Casablanca?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.6, lng: -7.6164 }],
  },
  {
    id: 119,
    question: 'Where is Dalian?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 38.9228, lng: 121.6298 }],
  },
  {
    id: 120,
    question: 'Where is Cawnpore?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 26.46, lng: 80.32 }],
  },
  {
    id: 121,
    question: 'Where is Kano?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 12, lng: 8.52 }],
  },
  {
    id: 122,
    question: 'Where is Tel Aviv-Yafo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 32.08, lng: 34.77 }],
  },
  {
    id: 123,
    question: 'Where is Addis Ababa?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 9.0333, lng: 38.7 }],
  },
  {
    id: 124,
    question: 'Where is Curitiba?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -25.42, lng: -49.32 }],
  },
  {
    id: 125,
    question: 'Where is Zibo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.8, lng: 118.05 }],
  },
  {
    id: 126,
    question: 'Where is Jeddah?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 21.5169, lng: 39.2192 }],
  },
  {
    id: 127,
    question: 'Where is Nairobi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -1.2833, lng: 36.8167 }],
  },
  {
    id: 128,
    question: 'Where is Hangzhou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 30.25, lng: 120.17 }],
  },
  {
    id: 129,
    question: 'Where is Benoni?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -26.1496, lng: 28.3299 }],
  },
  {
    id: 130,
    question: 'Where is Caracas?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 10.501, lng: -66.917 }],
  },
  {
    id: 131,
    question: 'Where is Milan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 45.47, lng: 9.205 }],
  },
  {
    id: 132,
    question: 'Where is Stuttgart?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 48.78, lng: 9.2 }],
  },
  {
    id: 133,
    question: 'Where is Kunming?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 25.07, lng: 102.68 }],
  },
  {
    id: 134,
    question: 'Where is Dar es Salaam?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -6.8, lng: 39.2683 }],
  },
  {
    id: 135,
    question: 'Where is Minneapolis?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 44.9635, lng: -93.2678 }],
  },
  {
    id: 136,
    question: 'Where is Jaipur?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 26.9211, lng: 75.81 }],
  },
  {
    id: 137,
    question: 'Where is Taiyuan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 37.875, lng: 112.5451 }],
  },
  {
    id: 138,
    question: 'Where is Frankfurt?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 50.1, lng: 8.675 }],
  },
  {
    id: 139,
    question: 'Where is Qingdao?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.09, lng: 120.33 }],
  },
  {
    id: 140,
    question: 'Where is Surabaya?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -7.2492, lng: 112.7508 }],
  },
  {
    id: 141,
    question: 'Where is Lisbon?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 38.7227, lng: -9.1449 }],
  },
  {
    id: 142,
    question: 'Where is Tampa?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 27.9942, lng: -82.4451 }],
  },
  {
    id: 143,
    question: 'Where is Jinan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.675, lng: 116.995 }],
  },
  {
    id: 144,
    question: 'Where is Fukuoka?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.595, lng: 130.41 }],
  },
  {
    id: 145,
    question: 'Where is Campinas?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -22.9, lng: -47.1 }],
  },
  {
    id: 146,
    question: 'Where is Denver?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 39.7621, lng: -104.8759 }],
  },
  {
    id: 147,
    question: 'Where is Kaohsiung?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.6333, lng: 120.2666 }],
  },
  {
    id: 148,
    question: 'Where is Quezon City?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 14.6504, lng: 121.03 }],
  },
  {
    id: 149,
    question: 'Where is Katowice?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 50.2604, lng: 19.02 }],
  },
  {
    id: 150,
    question: 'Where is Aleppo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.23, lng: 37.17 }],
  },
  {
    id: 151,
    question: 'Where is Durban?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -29.865, lng: 30.98 }],
  },
  {
    id: 152,
    question: 'Where is Kyiv?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 50.4334, lng: 30.5166 }],
  },
  {
    id: 153,
    question: 'Where is Lucknow?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 26.855, lng: 80.915 }],
  },
  {
    id: 154,
    question: 'Where is Giza?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 30.01, lng: 31.19 }],
  },
  {
    id: 155,
    question: 'Where is Zhengzhou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.755, lng: 113.6651 }],
  },
  {
    id: 156,
    question: 'Where is Taichung?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 24.1521, lng: 120.6817 }],
  },
  {
    id: 157,
    question: 'Where is Brooklyn?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.6501, lng: -73.9496 }],
  },
  {
    id: 158,
    question: 'Where is Ibadan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 7.38, lng: 3.93 }],
  },
  {
    id: 159,
    question: 'Where is Faisalabad?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 31.41, lng: 73.11 }],
  },
  {
    id: 160,
    question: 'Where is Fuzhou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 26.08, lng: 119.3 }],
  },
  {
    id: 161,
    question: 'Where is Changsha?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 28.2, lng: 112.97 }],
  },
  {
    id: 162,
    question: 'Where is Dakar?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 14.7158, lng: -17.4731 }],
  },
  {
    id: 163,
    question: 'Where is Izmir?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 38.4361, lng: 27.1518 }],
  },
  {
    id: 164,
    question: 'Where is Xiangtan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 27.8504, lng: 112.9 }],
  },
  {
    id: 165,
    question: 'Where is Lanzhou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.056, lng: 103.792 }],
  },
  {
    id: 166,
    question: 'Where is Incheon?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 37.4761, lng: 126.6422 }],
  },
  {
    id: 167,
    question: 'Where is Sapporo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 43.075, lng: 141.34 }],
  },
  {
    id: 168,
    question: 'Where is Xiamen?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 24.45, lng: 118.08 }],
  },
  {
    id: 169,
    question: 'Where is Guayaquil?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -2.22, lng: -79.92 }],
  },
  {
    id: 170,
    question: 'Where is George Town?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 5.4136, lng: 100.3294 }],
  },
  {
    id: 171,
    question: 'Where is Mashhad?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.27, lng: 59.57 }],
  },
  {
    id: 172,
    question: 'Where is Damascus?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.5, lng: 36.3 }],
  },
  {
    id: 173,
    question: 'Where is Daegu?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 35.8668, lng: 128.607 }],
  },
  {
    id: 174,
    question: 'Where is Nagpur?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 21.17, lng: 79.09 }],
  },
  {
    id: 175,
    question: 'Where is Lianshan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.7503, lng: 120.83 }],
  },
  {
    id: 176,
    question: 'Where is Shijiazhuang?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 38.05, lng: 114.48 }],
  },
  {
    id: 177,
    question: 'Where is Tunis?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.8028, lng: 10.1797 }],
  },
  {
    id: 178,
    question: 'Where is Vienna?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 48.2, lng: 16.3666 }],
  },
  {
    id: 179,
    question: 'Where is Jilin?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 43.85, lng: 126.55 }],
  },
  {
    id: 180,
    question: 'Where is Omdurman?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 15.6167, lng: 32.48 }],
  },
  {
    id: 181,
    question: 'Where is Bandung?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -6.95, lng: 107.57 }],
  },
  {
    id: 182,
    question: 'Where is Bekasi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -6.2173, lng: 106.9723 }],
  },
  {
    id: 183,
    question: 'Where is Mannheim?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 49.5004, lng: 8.47 }],
  },
  {
    id: 184,
    question: 'Where is Nanchang?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 28.68, lng: 115.88 }],
  },
  {
    id: 185,
    question: 'Where is Wenzhou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 28.02, lng: 120.6501 }],
  },
  {
    id: 186,
    question: 'Where is Queens?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.7498, lng: -73.7976 }],
  },
  {
    id: 187,
    question: 'Where is Vancouver?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 49.2734, lng: -123.1216 }],
  },
  {
    id: 188,
    question: 'Where is Birmingham?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 52.475, lng: -1.92 }],
  },
  {
    id: 189,
    question: 'Where is Cali?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 3.4, lng: -76.5 }],
  },
  {
    id: 190,
    question: 'Where is Naples?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.84, lng: 14.245 }],
  },
  {
    id: 191,
    question: 'Where is Sendai?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 38.2871, lng: 141.0217 }],
  },
  {
    id: 192,
    question: 'Where is Manchester?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 53.5004, lng: -2.248 }],
  },
  {
    id: 193,
    question: 'Where is Puebla?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 19.05, lng: -98.2 }],
  },
  {
    id: 194,
    question: 'Where is Tripoli?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 32.8925, lng: 13.18 }],
  },
  {
    id: 195,
    question: 'Where is Tashkent?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 41.3117, lng: 69.2949 }],
  },
  {
    id: 196,
    question: 'Where is Havana?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 23.132, lng: -82.3642 }],
  },
  {
    id: 197,
    question: 'Where is Gaoping?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 30.7804, lng: 106.13 }],
  },
  {
    id: 198,
    question: 'Where is Baltimore?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 39.3051, lng: -76.6144 }],
  },
  {
    id: 199,
    question: 'Where is Nanning?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.82, lng: 108.32 }],
  },
  {
    id: 200,
    question: 'Where is Belem?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -1.45, lng: -48.48 }],
  },
  {
    id: 201,
    question: 'Where is Patna?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 25.625, lng: 85.13 }],
  },
  {
    id: 202,
    question: 'Where is Santo Domingo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 18.4701, lng: -69.9001 }],
  },
  {
    id: 203,
    question: 'Where is Urumqi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 43.805, lng: 87.575 }],
  },
  {
    id: 204,
    question: 'Where is Zaozhuang?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.88, lng: 117.57 }],
  },
  {
    id: 205,
    question: 'Where is Baku?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.3953, lng: 49.8622 }],
  },
  {
    id: 206,
    question: 'Where is Accra?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 5.55, lng: -0.2167 }],
  },
  {
    id: 207,
    question: 'Where is Yantai?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 37.5304, lng: 121.4 }],
  },
  {
    id: 208,
    question: 'Where is Medan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 3.58, lng: 98.65 }],
  },
  {
    id: 209,
    question: 'Where is Santa Cruz?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -17.7539, lng: -63.226 }],
  },
  {
    id: 210,
    question: 'Where is Tongshan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.28, lng: 117.18 }],
  },
  {
    id: 211,
    question: 'Where is Riverside?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.9381, lng: -117.3948 }],
  },
  {
    id: 212,
    question: 'Where is Linyi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 35.08, lng: 118.33 }],
  },
  {
    id: 213,
    question: 'Where is St. Louis?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 38.6358, lng: -90.2451 }],
  },
  {
    id: 214,
    question: 'Where is Las Vegas?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 36.2333, lng: -115.2654 }],
  },
  {
    id: 215,
    question: 'Where is Maracaibo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 10.73, lng: -71.66 }],
  },
  {
    id: 216,
    question: 'Where is Kuwait City?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 29.3697, lng: 47.9783 }],
  },
  {
    id: 217,
    question: 'Where is Ad Dammam?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 26.4282, lng: 50.0997 }],
  },
  {
    id: 218,
    question: 'Where is Portland?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 45.5371, lng: -122.65 }],
  },
  {
    id: 219,
    question: 'Where is Haikou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 20.05, lng: 110.32 }],
  },
  {
    id: 220,
    question: 'Where is Hiroshima?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.3878, lng: 132.4429 }],
  },
  {
    id: 221,
    question: 'Where is Baotou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.6522, lng: 109.822 }],
  },
  {
    id: 222,
    question: 'Where is Hefei?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 31.85, lng: 117.28 }],
  },
  {
    id: 223,
    question: 'Where is Indore?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.7151, lng: 75.865 }],
  },
  {
    id: 224,
    question: 'Where is Goiania?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -16.72, lng: -49.3 }],
  },
  {
    id: 225,
    question: 'Where is Sanaa?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 15.3547, lng: 44.2066 }],
  },
  {
    id: 226,
    question: 'Where is San Antonio?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 29.4658, lng: -98.5254 }],
  },
  {
    id: 227,
    question: 'Where is Port-au-Prince?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 18.541, lng: -72.336 }],
  },
  {
    id: 228,
    question: 'Where is Haiphong?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 20.83, lng: 106.6801 }],
  },
  {
    id: 229,
    question: 'Where is Suzhou?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.6361, lng: 116.9789 }],
  },
  {
    id: 230,
    question: 'Where is Nanyang?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.0004, lng: 112.53 }],
  },
  {
    id: 231,
    question: 'Where is Bucharest?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 44.4334, lng: 26.0999 }],
  },
  {
    id: 232,
    question: 'Where is Ningbo?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 29.88, lng: 121.55 }],
  },
  {
    id: 233,
    question: 'Where is Douala?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 4.0604, lng: 9.71 }],
  },
  {
    id: 234,
    question: 'Where is Tangshan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 39.6243, lng: 118.1944 }],
  },
  {
    id: 235,
    question: 'Where is Tainan?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 23, lng: 120.2 }],
  },
  {
    id: 236,
    question: 'Where is Xiping?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.08, lng: 113.3 }],
  },
  {
    id: 237,
    question: 'Where is Asuncion?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -25.2964, lng: -57.6415 }],
  },
  {
    id: 238,
    question: 'Where is Saidu Sharif?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.75, lng: 72.35 }],
  },
  {
    id: 239,
    question: 'Where is Brisbane?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -27.455, lng: 153.0351 }],
  },
  {
    id: 240,
    question: 'Where is Rawalpindi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.6, lng: 73.04 }],
  },
  {
    id: 241,
    question: 'Where is Sacramento?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 38.5667, lng: -121.4683 }],
  },
  {
    id: 242,
    question: 'Where is Beirut?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 33.872, lng: 35.5097 }],
  },
  {
    id: 243,
    question: 'Where is San Jose?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 37.3021, lng: -121.8489 }],
  },
  {
    id: 244,
    question: 'Where is Minsk?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 53.9, lng: 27.5666 }],
  },
  {
    id: 245,
    question: 'Where is Kyoto?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 35.03, lng: 135.75 }],
  },
  {
    id: 246,
    question: 'Where is Barranquilla?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 10.96, lng: -74.8 }],
  },
  {
    id: 247,
    question: 'Where is Orlando?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 28.4772, lng: -81.3369 }],
  },
  {
    id: 248,
    question: 'Where is Shuyangzha?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.1299, lng: 118.7734 }],
  },
  {
    id: 249,
    question: 'Where is Valencia?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 10.23, lng: -67.98 }],
  },
  {
    id: 250,
    question: 'Where is Hamburg?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 53.55, lng: 10 }],
  },
  {
    id: 251,
    question: 'Where is Vadodara?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 22.31, lng: 73.18 }],
  },
  {
    id: 252,
    question: 'Where is Manaus?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -3.1, lng: -60 }],
  },
  {
    id: 253,
    question: 'Where is Shangqiu?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 34.4504, lng: 115.65 }],
  },
  {
    id: 254,
    question: 'Where is Wuxi?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 31.58, lng: 120.3 }],
  },
  {
    id: 255,
    question: 'Where is Palembang?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: -2.98, lng: 104.75 }],
  },
  {
    id: 256,
    question: 'Where is Brussels?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 50.8333, lng: 4.3333 }],
  },
  {
    id: 257,
    question: 'Where is Essen?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 51.45, lng: 7.0166 }],
  },
  {
    id: 258,
    question: 'Where is Cleveland?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 41.4767, lng: -81.6805 }],
  },
  {
    id: 259,
    question: 'Where is Bhopal?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 23.25, lng: 77.41 }],
  },
  {
    id: 260,
    question: 'Where is Hohhot?',
    mapType: 'sat',
    type: 'cities',
    answers: [{ type: 'exact', lat: 40.82, lng: 111.66 }],
  },
  {
    id: 261,
    question: 'Where did Apollo 11 launch from on its monumental mission?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[Apollo 11](https://en.wikipedia.org/wiki/Apollo_11) launched from LC-39 at the [Kennedy Space Center](https://en.wikipedia.org/wiki/Kennedy_Space_Center). It put [Neil Armstrong](https://en.wikipedia.org/wiki/Neil_Armstrong) and [Buzz Aldrin](https://en.wikipedia.org/wiki/Buzz_Aldrin) on the Moon.',
    answers: [
      {
        type: 'exact',
        lat: 28.608389,
        lng: -80.604333,
      },
    ],
  },
  {
    id: 262,
    question: 'Where did the final Space Shuttle mission land in July 2011?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [orbiter Atlantis](https://en.wikipedia.org/wiki/Space_Shuttle_Atlantis) landed back at the [Kennedy Space Center](https://en.wikipedia.org/wiki/Kennedy_Space_Center) almost 13 days after launch.',
    answers: [
      {
        type: 'exact',
        lat: 28.615,
        lng: -80.6945,
      },
    ],
  },
  {
    id: 263,
    question: 'Where did the Sputnik 1 launch from?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The launchpad ["Gagarin\'s Start"](https://en.wikipedia.org/wiki/Gagarin%27s_Start) at Baikonur Cosmodrome is now in modern day Kazakhstan.',
    answers: [
      {
        type: 'exact',
        lat: 45.920278,
        lng: 63.342222,
      },
    ],
  },
  {
    id: 264,
    question: 'Where is the Chernobyl Nuclear Facility?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [nuclear disaster at Chernobyl](https://en.wikipedia.org/wiki/Chernobyl_disaster) is considered the worst in history.',
    answers: [
      {
        type: 'exact',
        lat: 51.389167,
        lng: 30.099444,
      },
    ],
  },
  {
    id: 265,
    question: 'Where was the Battle of Thermopylae fought?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The small [Spartan army of 7,000 held the coastal pass](https://en.wikipedia.org/wiki/Battle_of_Thermopylae) against the 100,000 strong Persain army for several days in 480 BC.',
    answers: [
      {
        type: 'exact',
        lat: 38.796607,
        lng: 22.536714,
      },
    ],
  },
  {
    id: 266,
    question: 'Where was the Battle of Midway fought?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[The battle](https://en.wikipedia.org/wiki/Battle_of_Midway) is considered a turning point in the Pacific Theatre of World War II.',
    answers: [
      {
        type: 'exact',
        lat: 28.2,
        lng: -177.35,
      },
    ],
  },
  {
    id: 267,
    question: 'Where was the attack on Pearl Habor?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[The attack by Japan](https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor) resulted in the United States joining World War II.',
    answers: [
      {
        type: 'exact',
        lat: 21.34927,
        lng: -157.94397,
      },
    ],
  },
  {
    id: 268,
    question: 'Where is Mount Vesuvius?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[Vesuvius\'](https://en.wikipedia.org/wiki/Mount_Vesuvius) eruption in AD 79 killed more than 1,000 people. Over 600,000 people still live in the danger zone.',
    answers: [
      {
        type: 'exact',
        lat: 40.816667,
        lng: 14.433333,
      },
    ],
  },
  {
    id: 269,
    question: 'Where was the epicentre of the most powerful earthquake every recorded?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [1960 earthquake in Chile](https://en.wikipedia.org/wiki/1960_Valdivia_earthquake) resulted in tsunamis travelling half way across the world.',
    answers: [
      {
        type: 'exact',
        lat: -38.24,
        lng: -73.05,
      },
    ],
  },
  {
    id: 270,
    question: 'Where was the Olympic games that saw the first Fosbury Flop?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[Dick Fosbury](https://en.wikipedia.org/wiki/Dick_Fosbury) starting using the now widespread method in 1968 after failing to succeed with existing methods.',
    answers: [
      {
        type: 'exact',
        lat: 19.433333,
        lng: -99.133333,
      },
    ],
  },
  {
    id: 271,
    question: 'Where were the 1992 Summer Olympics hosted?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[The Unified Team](https://en.wikipedia.org/wiki/Unified_Team_at_the_1992_Summer_Olympics), consisting of several former Soviet republics, won the most Gold medals and total medals.',
    answers: [
      {
        type: 'exact',
        lat: 41.383333,
        lng: 2.183333,
      },
    ],
  },
  {
    id: 272,
    question: 'What was the destination of the ferry involved in deadliest peacetime maritime disaster?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [MV Doña Paz](https://en.wikipedia.org/wiki/MV_Do%C3%B1a_Paz) collided with the oil tanker MT Vector in 1987 on its way to the Philippine capital of Manila.',
    answers: [
      {
        type: 'exact',
        lat: 14.599512,
        lng: 120.984222,
      },
    ],
  },
  {
    id: 273,
    question: 'Where is Krakatoa, the huge volcano that erupted in 1883?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[The eruption](https://en.wikipedia.org/wiki/1883_eruption_of_Krakatoa) is said to have dropped the global temperature by 0.5C.',
    answers: [
      {
        type: 'exact',
        lat: -6.102,
        lng: 105.423,
      },
    ],
  },
  {
    id: 274,
    question: 'Where was the Battle of the Bulge?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [Battle of the Bulge](https://en.wikipedia.org/wiki/Battle_of_the_Bulge) was the largest and bloodiest battle fought by the United States in World War II.',
    answers: [
      {
        type: 'exact',
        lat: 50.25,
        lng: 5.666667,
      },
    ],
  },
  {
    id: 275,
    question: 'Where was US President John F. Kennedy when he was assassinated?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[JFK](https://en.wikipedia.org/wiki/John_F._Kennedy) was assassinated while riding a motorcade in Dallas, tTexas.',
    answers: [
      {
        type: 'exact',
        lat: 32.77903,
        lng: -96.80867,
      },
    ],
  },
  {
    id: 276,
    question: 'Where was US President Abraham Lincoln when he was assassinated?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[Abraham Lincoln](https://en.wikipedia.org/wiki/Abraham_Lincoln) was the first US president to be assassinated. He was attending a play at Ford\'s Theatre in Washington D.C.',
    answers: [
      {
        type: 'exact',
        lat: 38.896667,
        lng: -77.025833,
      },
    ],
  },
  {
    id: 277,
    question: 'Where was the deadliest volcanic eruption in United States history?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[Mount St. Helens\'](https://en.wikipedia.org/wiki/Mount_St._Helens) deadly eruption was in 1980 and caused over $1 billion in damages, in 1980s money.',
    answers: [
      {
        type: 'exact',
        lat: 46.1912,
        lng: -122.1944,
      },
    ],
  },
  {
    id: 278,
    question: 'Where is the world\'s most populated city (including metro area)?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[Tokyo](https://en.wikipedia.org/wiki/Tokyo), in Japan, has over 35 million people living in it!',
    answers: [
      {
        type: 'exact',
        lat: 35.6762,
        lng: 139.6503,
      },
    ],
  },
  {
    id: 279,
    question: 'Where is the world\'s most populated city (excluding metro area)?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: '[Chongqing](https://en.wikipedia.org/wiki/Chongqing), in China, has over 30 million people living in it!',
    answers: [
      {
        type: 'exact',
        lat: 29.558333,
        lng: 106.566667,
      },
    ],
  },
  {
    id: 280,
    question: 'Where is the tallest building in the world?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [Burj Khalifa](https://en.wikipedia.org/wiki/Burj_Khalifa) was completed in 2009 and is 830m tall.',
    answers: [
      {
        type: 'exact',
        lat: 25.197139,
        lng: 55.274111,
      },
    ],
  },
  {
    id: 281,
    question: 'Where is the tallest building in the western hemisphere?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [One World Trade Center](https://en.wikipedia.org/wiki/One_World_Trade_Center) was completed in 2013 and is 7th tallest in the world at 541m tall. It\'s height in feet (1,776ft) is the year that the US Declaration of Independence was signed.',
    answers: [
      {
        type: 'exact',
        lat: 40.713,
        lng: -74.0135,
      },
    ],
  },
  {
    id: 282,
    question: 'Where is the world\'s tallest building with a clock face?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [Abraj Al-Bait](https://en.wikipedia.org/wiki/Abraj_Al_Bait) in Mecca, Saudi Arabia, is the 5th tallest building in the world and was completed in 2011.',
    answers: [
      {
        type: 'exact',
        lat: 21.418889,
        lng: 39.826389,
      },
    ],
  },
  {
    id: 283,
    question: 'Where is the tallest building in Europe?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [Lakhta Center](https://en.wikipedia.org/wiki/Lakhta_Center) in St. Petersburg, Russia, is 462m tall and was completed in 2018.',
    answers: [
      {
        type: 'exact',
        lat: 59.987139,
        lng: 30.177028,
      },
    ],
  },
  {
    id: 284,
    question: 'Where is the tallest tower in the world?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [Tokyo Skytree](https://en.wikipedia.org/wiki/Tokyo_Skytree) stands at 634m tall and completed in 2012.',
    answers: [
      {
        type: 'exact',
        lat: 35.7101,
        lng: 139.8107,
      },
    ],
  },
  {
    id: 285,
    question: 'Where is the tallest tower in the Western Hemisphere?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [CN Tower](https://en.wikipedia.org/wiki/CN_Tower) in Toronto stands at 553m tall and completed in 1976.',
    answers: [
      {
        type: 'exact',
        lat: 43.6426,
        lng: -79.3871,
      },
    ],
  },
  {
    id: 286,
    question: 'Where is the tallest tower in Europe?',
    mapType: 'sat',
    type: 'trivia',
    textAnswer: 'The [Ostankino Tower](https://en.wikipedia.org/wiki/Ostankino_Tower) in Moscow, Russia, stands at 540m tall and completed in 1967.',
    answers: [
      {
        type: 'exact',
        lat: 55.819722,
        lng: 37.611667,
      },
    ],
  },
  {
    id: 287,
    question: '?',
    mapType: 'sat',
    type: 'test',
    textAnswer: '.',
    answers: [
      {
        type: 'exact',
        lat: 46.1912,
        lng: 122.1944,
      },
    ],
  },
  {
    id: 288, question: 'Where is London?', answers: [{ type: 'exact', lat: 51.514248, lng: -0.093145 }], type: 'ukcities',
  },
  {
    id: 289, question: 'Where is Birmingham?', answers: [{ type: 'exact', lat: 52.466667, lng: -1.916667 }], type: 'ukcities',
  },
  {
    id: 290, question: 'Where is Manchester?', answers: [{ type: 'exact', lat: 53.5, lng: -2.216667 }], type: 'ukcities',
  },
  {
    id: 291, question: 'Where is Leeds?', answers: [{ type: 'exact', lat: 53.8, lng: -1.583333 }], type: 'ukcities',
  },
  {
    id: 292, question: 'Where is Sheffield?', answers: [{ type: 'exact', lat: 53.366667, lng: -1.5 }], type: 'ukcities',
  },
  {
    id: 293, question: 'Where is Glasgow?', answers: [{ type: 'exact', lat: 55.833333, lng: -4.25 }], type: 'ukcities',
  },
  {
    id: 294, question: 'Where is Newcastle upon Tyne?', answers: [{ type: 'exact', lat: 54.988056, lng: -1.619444 }], type: 'ukcities',
  },
  {
    id: 295, question: 'Where is Nottingham?', answers: [{ type: 'exact', lat: 52.966667, lng: -1.166667 }], type: 'ukcities',
  },
  {
    id: 296, question: 'Where is Liverpool?', answers: [{ type: 'exact', lat: 53.416667, lng: -3 }], type: 'ukcities',
  },
  {
    id: 297, question: 'Where is Southend-on-Sea?', answers: [{ type: 'exact', lat: 51.533333, lng: 0.7 }], type: 'ukcities',
  },
  {
    id: 298, question: 'Where is Bristol?', answers: [{ type: 'exact', lat: 51.45, lng: -2.583333 }], type: 'ukcities',
  },
  {
    id: 299, question: 'Where is Edinburgh?', answers: [{ type: 'exact', lat: 55.95, lng: -3.2 }], type: 'ukcities',
  },
  {
    id: 300, question: 'Where is Brighton?', answers: [{ type: 'exact', lat: 50.833333, lng: -0.15 }], type: 'ukcities',
  },
  {
    id: 301, question: 'Where is Bradford?', answers: [{ type: 'exact', lat: 53.783333, lng: -1.75 }], type: 'ukcities',
  },
  {
    id: 302, question: 'Where is Leicester?', answers: [{ type: 'exact', lat: 52.633333, lng: -1.133333 }], type: 'ukcities',
  },
  {
    id: 303, question: 'Where is Sunderland?', answers: [{ type: 'exact', lat: 54.911944, lng: -1.383333 }], type: 'ukcities',
  },
  {
    id: 304, question: 'Where is Belfast?', answers: [{ type: 'exact', lat: 54.6, lng: -5.933333 }], type: 'ukcities',
  },
  {
    id: 305, question: 'Where is Portsmouth?', answers: [{ type: 'exact', lat: 50.766667, lng: -1.083333 }], type: 'ukcities',
  },
  {
    id: 306, question: 'Where is Bournemouth?', answers: [{ type: 'exact', lat: 50.716667, lng: -1.883333 }], type: 'ukcities',
  },
  {
    id: 307, question: 'Where is Middlesbrough?', answers: [{ type: 'exact', lat: 54.572778, lng: -1.162778 }], type: 'ukcities',
  },
  {
    id: 308, question: 'Where is Coventry?', answers: [{ type: 'exact', lat: 52.416667, lng: -1.55 }], type: 'ukcities',
  },
  {
    id: 309, question: 'Where is Southampton?', answers: [{ type: 'exact', lat: 50.9, lng: -1.4 }], type: 'ukcities',
  },
  {
    id: 310, question: 'Where is Reading?', answers: [{ type: 'exact', lat: 51.433333, lng: -1 }], type: 'ukcities',
  },
  {
    id: 311, question: 'Where is Sutton on Hull?', answers: [{ type: 'exact', lat: 53.783333, lng: -0.316667 }], type: 'ukcities',
  },
  {
    id: 312, question: 'Where is Blackpool?', answers: [{ type: 'exact', lat: 53.816667, lng: -3.05 }], type: 'ukcities',
  },
  {
    id: 313, question: 'Where is Plymouth?', answers: [{ type: 'exact', lat: 50.396389, lng: -4.138611 }], type: 'ukcities',
  },
  {
    id: 314, question: 'Where is Luton?', answers: [{ type: 'exact', lat: 51.883333, lng: -0.416667 }], type: 'ukcities',
  },
  {
    id: 315, question: 'Where is Oxford?', answers: [{ type: 'exact', lat: 51.75, lng: -1.25 }], type: 'ukcities',
  },
  {
    id: 316, question: 'Where is Norwich?', answers: [{ type: 'exact', lat: 52.633333, lng: 1.3 }], type: 'ukcities',
  },
  {
    id: 317, question: 'Where is Old Aberdeen?', answers: [{ type: 'exact', lat: 57.166667, lng: -2.1 }], type: 'ukcities',
  },
  {
    id: 318, question: 'Where is York?', answers: [{ type: 'exact', lat: 53.966667, lng: -1.083333 }], type: 'ukcities',
  },
  {
    id: 319, question: 'Where is Dundee?', answers: [{ type: 'exact', lat: 56.5, lng: -2.966667 }], type: 'ukcities',
  },
  {
    id: 320, question: 'Where is Ipswich?', answers: [{ type: 'exact', lat: 52.083333, lng: 1.166667 }], type: 'ukcities',
  },
  {
    id: 321, question: 'Where is Peterborough?', answers: [{ type: 'exact', lat: 52.583333, lng: -0.25 }], type: 'ukcities',
  },
  {
    id: 322, question: 'Where is Cambridge?', answers: [{ type: 'exact', lat: 52.2, lng: 0.116667 }], type: 'ukcities',
  },
  {
    id: 323, question: 'Where is Exminster?', answers: [{ type: 'exact', lat: 50.683333, lng: -3.483333 }], type: 'ukcities',
  },
  {
    id: 324, question: 'Where is Bath?', answers: [{ type: 'exact', lat: 51.379444, lng: -2.365556 }], type: 'ukcities',
  },
  {
    id: 325, question: 'Where is Chester?', answers: [{ type: 'exact', lat: 53.2, lng: -2.916667 }], type: 'ukcities',
  },
  {
    id: 326, question: 'Where is Greenock?', answers: [{ type: 'exact', lat: 55.933333, lng: -4.75 }], type: 'ukcities',
  },
  {
    id: 327, question: 'Where is Carlisle?', answers: [{ type: 'exact', lat: 54.883333, lng: -2.933333 }], type: 'ukcities',
  },
  {
    id: 328, question: 'Where is Scarborough?', answers: [{ type: 'exact', lat: 54.287222, lng: -0.414167 }], type: 'ukcities',
  },
  {
    id: 329, question: 'Where is Ayr?', answers: [{ type: 'exact', lat: 55.45, lng: -4.616667 }], type: 'ukcities',
  },
  {
    id: 330, question: 'Where is Inverness?', answers: [{ type: 'exact', lat: 57.466667, lng: -4.233333 }], type: 'ukcities',
  },
  {
    id: 331, question: 'Where is Perth?', answers: [{ type: 'exact', lat: 56.4, lng: -3.433333 }], type: 'ukcities',
  },
  {
    id: 332, question: 'Where is River?', answers: [{ type: 'exact', lat: 51.133333, lng: 1.266667 }], type: 'ukcities',
  },
  {
    id: 333, question: 'Where is Dumfries?', answers: [{ type: 'exact', lat: 55.066667, lng: -3.55 }], type: 'ukcities',
  },
  {
    id: 334, question: 'Where is Omagh?', answers: [{ type: 'exact', lat: 54.60124, lng: -7.29085 }], type: 'ukcities',
  },
  {
    id: 335, question: 'Where is Penzance?', answers: [{ type: 'exact', lat: 50.113611, lng: -5.547778 }], type: 'ukcities',
  },
  {
    id: 336, question: 'Where is Fort William?', answers: [{ type: 'exact', lat: 56.816667, lng: -5.116667 }], type: 'ukcities',
  },
  {
    id: 337, question: 'Where is Kirkwall?', answers: [{ type: 'exact', lat: 58.966667, lng: -2.95 }], type: 'ukcities',
  },
  {
    id: 338, question: 'Where is Wick?', answers: [{ type: 'exact', lat: 58.433333, lng: -3.083333 }], type: 'ukcities',
  },
  {
    id: 339, question: 'Where is Lerwick?', answers: [{ type: 'exact', lat: 60.15, lng: -1.15 }], type: 'ukcities',
  },
  {
    id: 340, question: 'Where is Ilford?', answers: [{ type: 'exact', lat: 51.559666, lng: 0.070805 }], type: 'ukcities',
  },
  {
    id: 341, question: 'Where is Chelmsford?', answers: [{ type: 'exact', lat: 51.733333, lng: 0.483333 }], type: 'ukcities',
  },
  {
    id: 342, question: 'Where is Weston-super-Mare?', answers: [{ type: 'exact', lat: 51.345833, lng: -2.967778 }], type: 'ukcities',
  },
  {
    id: 343, question: 'Where is Llangefni?', answers: [{ type: 'exact', lat: 53.266667, lng: -4.333333 }], type: 'ukcities',
  },
  {
    id: 344, question: 'Where is Southport?', answers: [{ type: 'exact', lat: 53.666667, lng: -3 }], type: 'ukcities',
  },
  {
    id: 345, question: 'Where is Armagh?', answers: [{ type: 'exact', lat: 54.34812, lng: -6.64957 }], type: 'ukcities',
  },
  {
    id: 346, question: 'Where is Rochester?', answers: [{ type: 'exact', lat: 51.383333, lng: 0.516667 }], type: 'ukcities',
  },
  {
    id: 347, question: 'Where is Rochdale?', answers: [{ type: 'exact', lat: 53.616667, lng: -2.15 }], type: 'ukcities',
  },
  {
    id: 348, question: 'Where is Motherwell?', answers: [{ type: 'exact', lat: 55.783333, lng: -4 }], type: 'ukcities',
  },
  {
    id: 349, question: 'Where is Clydach Vale?', answers: [{ type: 'exact', lat: 51.626667, lng: -3.476111 }], type: 'ukcities',
  },
  {
    id: 350, question: 'Where is Kirkintilloch?', answers: [{ type: 'exact', lat: 55.916667, lng: -4.166667 }], type: 'ukcities',
  },
  {
    id: 351, question: 'Where is Stirling?', answers: [{ type: 'exact', lat: 56.116667, lng: -3.95 }], type: 'ukcities',
  },
  {
    id: 352, question: 'Where is Lambeth?', answers: [{ type: 'exact', lat: 51.5, lng: -0.116667 }], type: 'ukcities',
  },
  {
    id: 353, question: 'Where is Dungannon?', answers: [{ type: 'exact', lat: 54.50333, lng: -6.76427 }], type: 'ukcities',
  },
  {
    id: 354, question: 'Where is Huddersfield?', answers: [{ type: 'exact', lat: 53.65, lng: -1.783333 }], type: 'ukcities',
  },
  {
    id: 355, question: 'Where is Stretford?', answers: [{ type: 'exact', lat: 53.45, lng: -2.316667 }], type: 'ukcities',
  },
  {
    id: 356, question: 'Where is Preston?', answers: [{ type: 'exact', lat: 53.766667, lng: -2.716667 }], type: 'ukcities',
  },
  {
    id: 357, question: 'Where is Newbury?', answers: [{ type: 'exact', lat: 51.4, lng: -1.316667 }], type: 'ukcities',
  },
  {
    id: 358, question: 'Where is Rhuthun?', answers: [{ type: 'exact', lat: 53.116667, lng: -3.3 }], type: 'ukcities',
  },
  {
    id: 359, question: 'Where is Blackburn?', answers: [{ type: 'exact', lat: 53.75, lng: -2.483333 }], type: 'ukcities',
  },
  {
    id: 360, question: 'Where is Wood Green?', answers: [{ type: 'exact', lat: 51.6, lng: -0.116667 }], type: 'ukcities',
  },
  {
    id: 361, question: 'Where is Stafford?', answers: [{ type: 'exact', lat: 52.8, lng: -2.1 }], type: 'ukcities',
  },
  {
    id: 362, question: 'Where is Gloucester?', answers: [{ type: 'exact', lat: 51.833333, lng: -2.25 }], type: 'ukcities',
  },
  {
    id: 363, question: 'Where is Glenrothes?', answers: [{ type: 'exact', lat: 56.2, lng: -3.183333 }], type: 'ukcities',
  },
  {
    id: 364, question: 'Where is South Bank?', answers: [{ type: 'exact', lat: 54.566667, lng: -1.15 }], type: 'ukcities',
  },
  {
    id: 365, question: 'Where is Pont-y-pŵl?', answers: [{ type: 'exact', lat: 51.701111, lng: -3.044444 }], type: 'ukcities',
  },
  {
    id: 366, question: 'Where is Durham?', answers: [{ type: 'exact', lat: 54.766667, lng: -1.566667 }], type: 'ukcities',
  },
  {
    id: 367, question: 'Where is Bedford?', answers: [{ type: 'exact', lat: 52.133333, lng: -0.45 }], type: 'ukcities',
  },
  {
    id: 368, question: 'Where is Taunton?', answers: [{ type: 'exact', lat: 51.021111, lng: -3.104722 }], type: 'ukcities',
  },
  {
    id: 369, question: 'Where is Widnes?', answers: [{ type: 'exact', lat: 53.35, lng: -2.733333 }], type: 'ukcities',
  },
  {
    id: 370, question: 'Where is Uxbridge?', answers: [{ type: 'exact', lat: 51.55, lng: -0.483333 }], type: 'ukcities',
  },
  {
    id: 371, question: 'Where is Elgin?', answers: [{ type: 'exact', lat: 57.65, lng: -3.333333 }], type: 'ukcities',
  },
  {
    id: 372, question: 'Where is Hove?', answers: [{ type: 'exact', lat: 50.833333, lng: -0.183333 }], type: 'ukcities',
  },
  {
    id: 373, question: 'Where is Lewes?', answers: [{ type: 'exact', lat: 50.866667, lng: -0.016667 }], type: 'ukcities',
  },
  {
    id: 374, question: 'Where is Maidstone?', answers: [{ type: 'exact', lat: 51.266667, lng: 0.516667 }], type: 'ukcities',
  },
  {
    id: 375, question: 'Where is Llandrindod Wells?', answers: [{ type: 'exact', lat: 52.233333, lng: -3.383333 }], type: 'ukcities',
  },
  {
    id: 376, question: 'Where is Kingston upon Hull?', answers: [{ type: 'exact', lat: 53.716667, lng: -0.333333 }], type: 'ukcities',
  },
  {
    id: 377, question: 'Where is Kingston upon Thames?', answers: [{ type: 'exact', lat: 51.416667, lng: -0.283333 }], type: 'ukcities',
  },
  {
    id: 378, question: 'Where is Barri?', answers: [{ type: 'exact', lat: 51.406667, lng: -3.269444 }], type: 'ukcities',
  },
  {
    id: 379, question: 'Where is Giffnock?', answers: [{ type: 'exact', lat: 55.8, lng: -4.283333 }], type: 'ukcities',
  },
  {
    id: 380, question: 'Where is Hounslow?', answers: [{ type: 'exact', lat: 51.466667, lng: -0.35 }], type: 'ukcities',
  },
  {
    id: 381, question: 'Where is Derry?', answers: [{ type: 'exact', lat: 54.99899, lng: -7.31063 }], type: 'ukcities',
  },
  {
    id: 382, question: 'Where is Newtownabbey?', answers: [{ type: 'exact', lat: 54.66912, lng: -5.904435 }], type: 'ukcities',
  },
  {
    id: 383, question: 'Where is Forfar?', answers: [{ type: 'exact', lat: 56.65, lng: -2.883333 }], type: 'ukcities',
  },
  {
    id: 384, question: 'Where is Torquay?', answers: [{ type: 'exact', lat: 50.45, lng: -3.5 }], type: 'ukcities',
  },
  {
    id: 385, question: 'Where is East Ham?', answers: [{ type: 'exact', lat: 51.533333, lng: 0.05 }], type: 'ukcities',
  },
  {
    id: 386, question: 'Where is Solihull?', answers: [{ type: 'exact', lat: 52.416667, lng: -1.783333 }], type: 'ukcities',
  },
  {
    id: 387, question: 'Where is Poplar?', answers: [{ type: 'exact', lat: 51.5, lng: -0.016667 }], type: 'ukcities',
  },
  {
    id: 388, question: 'Where is Mold?', answers: [{ type: 'exact', lat: 53.166667, lng: -3.133333 }], type: 'ukcities',
  },
  {
    id: 389, question: 'Where is Warwick?', answers: [{ type: 'exact', lat: 52.283333, lng: -1.583333 }], type: 'ukcities',
  },
  {
    id: 390, question: 'Where is Knowsley?', answers: [{ type: 'exact', lat: 53.45, lng: -2.85 }], type: 'ukcities',
  },
  {
    id: 391, question: 'Where is Hwlffordd?', answers: [{ type: 'exact', lat: 51.801667, lng: -4.970833 }], type: 'ukcities',
  },
  {
    id: 392, question: 'Where is Rotherham?', answers: [{ type: 'exact', lat: 53.433333, lng: -1.35 }], type: 'ukcities',
  },
  {
    id: 393, question: 'Where is Caernarfon?', answers: [{ type: 'exact', lat: 53.15, lng: -4.266667 }], type: 'ukcities',
  },
  {
    id: 394, question: 'Where is Morpeth?', answers: [{ type: 'exact', lat: 55.166667, lng: -1.683333 }], type: 'ukcities',
  },
  {
    id: 395, question: 'Where is Irvine?', answers: [{ type: 'exact', lat: 55.6, lng: -4.666667 }], type: 'ukcities',
  },
  {
    id: 396, question: 'Where is Cwmbran?', answers: [{ type: 'exact', lat: 51.653056, lng: -3.026667 }], type: 'ukcities',
  },
  {
    id: 397, question: 'Where is Stornoway?', answers: [{ type: 'exact', lat: 58.216667, lng: -6.366667 }], type: 'ukcities',
  },
  {
    id: 398, question: 'Where is Darlington?', answers: [{ type: 'exact', lat: 54.533333, lng: -1.566667 }], type: 'ukcities',
  },
  {
    id: 399, question: 'Where is Hackney?', answers: [{ type: 'exact', lat: 51.55, lng: -0.05 }], type: 'ukcities',
  },
  {
    id: 400, question: 'Where is Trowbridge?', answers: [{ type: 'exact', lat: 51.318889, lng: -2.208611 }], type: 'ukcities',
  },
  {
    id: 401, question: 'Where is Merthyr Tudful?', answers: [{ type: 'exact', lat: 51.75, lng: -3.383333 }], type: 'ukcities',
  },
  {
    id: 402, question: 'Where is Hertford?', answers: [{ type: 'exact', lat: 51.8, lng: -0.066667 }], type: 'ukcities',
  },
  {
    id: 403, question: 'Where is Newry?', answers: [{ type: 'exact', lat: 54.17795, lng: -6.33807 }], type: 'ukcities',
  },
  {
    id: 404, question: 'Where is Belfast?', answers: [{ type: 'exact', lat: 54.59682, lng: -5.92541 }], type: 'ukcities',
  },
  {
    id: 405, question: 'Where is Camberwell?', answers: [{ type: 'exact', lat: 51.473619, lng: -0.091618 }], type: 'ukcities',
  },
  {
    id: 406, question: 'Where is Caerfyrddin?', answers: [{ type: 'exact', lat: 51.859167, lng: -4.311667 }], type: 'ukcities',
  },
  {
    id: 407, question: 'Where is Cookstown?', answers: [{ type: 'exact', lat: 54.6428, lng: -6.74519 }], type: 'ukcities',
  },
  {
    id: 408, question: 'Where is Dorchester?', answers: [{ type: 'exact', lat: 50.716667, lng: -2.433333 }], type: 'ukcities',
  },
  {
    id: 409, question: 'Where is Port Talbot?', answers: [{ type: 'exact', lat: 51.6, lng: -3.783333 }], type: 'ukcities',
  },
  {
    id: 410, question: 'Where is Antrim?', answers: [{ type: 'exact', lat: 54.71291, lng: -6.20846 }], type: 'ukcities',
  },
  {
    id: 411, question: 'Where is Gateshead?', answers: [{ type: 'exact', lat: 54.945, lng: -1.6175 }], type: 'ukcities',
  },
  {
    id: 412, question: 'Where is Wandsworth?', answers: [{ type: 'exact', lat: 51.45, lng: -0.2 }], type: 'ukcities',
  },
  {
    id: 413, question: 'Where is Exeter?', answers: [{ type: 'exact', lat: 50.7, lng: -3.533333 }], type: 'ukcities',
  },
  {
    id: 414, question: 'Where is Camden Town?', answers: [{ type: 'exact', lat: 51.545664, lng: -0.140308 }], type: 'ukcities',
  },
  {
    id: 415, question: 'Where is Alloa?', answers: [{ type: 'exact', lat: 56.116667, lng: -3.8 }], type: 'ukcities',
  },
  {
    id: 416, question: 'Where is Chicksands?', answers: [{ type: 'exact', lat: 52.033333, lng: -0.366667 }], type: 'ukcities',
  },
  {
    id: 417, question: 'Where is Banbridge?', answers: [{ type: 'exact', lat: 54.35091, lng: -6.26701 }], type: 'ukcities',
  },
  {
    id: 418, question: 'Where is Walthamstow?', answers: [{ type: 'exact', lat: 51.6, lng: -0.033333 }], type: 'ukcities',
  },
  {
    id: 419, question: 'Where is Paisley?', answers: [{ type: 'exact', lat: 55.833333, lng: -4.433333 }], type: 'ukcities',
  },
  {
    id: 420, question: 'Where is Chichester?', answers: [{ type: 'exact', lat: 50.833333, lng: -0.783333 }], type: 'ukcities',
  },
  {
    id: 421, question: 'Where is Craigavon?', answers: [{ type: 'exact', lat: 54.44966, lng: -6.36457 }], type: 'ukcities',
  },
  {
    id: 422, question: 'Where is Woolwich?', answers: [{ type: 'exact', lat: 51.466667, lng: 0.2 }], type: 'ukcities',
  },
  {
    id: 423, question: 'Where is Northallerton?', answers: [{ type: 'exact', lat: 54.333333, lng: -1.433333 }], type: 'ukcities',
  },
  {
    id: 424, question: 'Where is Romford?', answers: [{ type: 'exact', lat: 51.583333, lng: 0.2 }], type: 'ukcities',
  },
  {
    id: 425, question: 'Where is Walsall?', answers: [{ type: 'exact', lat: 52.6, lng: -2 }], type: 'ukcities',
  },
  {
    id: 426, question: 'Where is Scunthorpe?', answers: [{ type: 'exact', lat: 53.583333, lng: -0.65 }], type: 'ukcities',
  },
  {
    id: 427, question: 'Where is Islington?', answers: [{ type: 'exact', lat: 51.533333, lng: -0.1 }], type: 'ukcities',
  },
  {
    id: 428, question: 'Where is Oldbury?', answers: [{ type: 'exact', lat: 52.5, lng: -2.016667 }], type: 'ukcities',
  },
  {
    id: 429, question: 'Where is Downpatrick?', answers: [{ type: 'exact', lat: 54.32694, lng: -5.71134 }], type: 'ukcities',
  },
  {
    id: 430, question: 'Where is Livingston?', answers: [{ type: 'exact', lat: 55.883333, lng: -3.533333 }], type: 'ukcities',
  },
  {
    id: 431, question: 'Where is Ashton-under-Lyne?', answers: [{ type: 'exact', lat: 53.5, lng: -2.1 }], type: 'ukcities',
  },
  {
    id: 432, question: 'Where is Winchester?', answers: [{ type: 'exact', lat: 51.016667, lng: -1.316667 }], type: 'ukcities',
  },
  {
    id: 433, question: 'Where is Sandbach?', answers: [{ type: 'exact', lat: 53.133333, lng: -2.366667 }], type: 'ukcities',
  },
  {
    id: 434, question: 'Where is Derby?', answers: [{ type: 'exact', lat: 52.933333, lng: -1.5 }], type: 'ukcities',
  },
  {
    id: 435, question: 'Where is Twickenham?', answers: [{ type: 'exact', lat: 51.433333, lng: -0.316667 }], type: 'ukcities',
  },
  {
    id: 436, question: 'Where is Saint Helens?', answers: [{ type: 'exact', lat: 53.45, lng: -2.733333 }], type: 'ukcities',
  },
  {
    id: 437, question: 'Where is Bury?', answers: [{ type: 'exact', lat: 53.6, lng: -2.3 }], type: 'ukcities',
  },
  {
    id: 438, question: 'Where is Maidenhead?', answers: [{ type: 'exact', lat: 51.516667, lng: -0.7 }], type: 'ukcities',
  },
  {
    id: 439, question: 'Where is Wembley?', answers: [{ type: 'exact', lat: 51.55, lng: -0.283333 }], type: 'ukcities',
  },
  {
    id: 440, question: 'Where is Hartlepool?', answers: [{ type: 'exact', lat: 54.686111, lng: -1.2125 }], type: 'ukcities',
  },
  {
    id: 441, question: 'Where is Hugh Town?', answers: [{ type: 'exact', lat: 49.914597, lng: -6.314273 }], type: 'ukcities',
  },
  {
    id: 442, question: 'Where is Oldham?', answers: [{ type: 'exact', lat: 53.55, lng: -2.116667 }], type: 'ukcities',
  },
  {
    id: 443, question: 'Where is Bexleyheath?', answers: [{ type: 'exact', lat: 51.45, lng: 0.15 }], type: 'ukcities',
  },
  {
    id: 444, question: 'Where is Ebbw Vale?', answers: [{ type: 'exact', lat: 51.783333, lng: -3.2 }], type: 'ukcities',
  },
  {
    id: 445, question: 'Where is Magherafelt?', answers: [{ type: 'exact', lat: 54.75426, lng: -6.60941 }], type: 'ukcities',
  },
  {
    id: 446, question: 'Where is Wigan?', answers: [{ type: 'exact', lat: 53.533333, lng: -2.616667 }], type: 'ukcities',
  },
  {
    id: 447, question: 'Where is Ballymena?', answers: [{ type: 'exact', lat: 54.86121, lng: -6.27633 }], type: 'ukcities',
  },
  {
    id: 448, question: 'Where is Halifax?', answers: [{ type: 'exact', lat: 53.716667, lng: -1.85 }], type: 'ukcities',
  },
  {
    id: 449, question: 'Where is Stockport?', answers: [{ type: 'exact', lat: 53.4, lng: -2.15 }], type: 'ukcities',
  },
  {
    id: 450, question: 'Where is Stockton-on-Tees?', answers: [{ type: 'exact', lat: 54.583333, lng: -1.416667 }], type: 'ukcities',
  },
  {
    id: 451, question: 'Where is Northampton?', answers: [{ type: 'exact', lat: 52.25, lng: -0.883333 }], type: 'ukcities',
  },
  {
    id: 452, question: 'Where is Grays?', answers: [{ type: 'exact', lat: 51.483333, lng: 0.333333 }], type: 'ukcities',
  },
  {
    id: 453, question: 'Where is Ystrad Mynach?', answers: [{ type: 'exact', lat: 51.640278, lng: -3.243333 }], type: 'ukcities',
  },
  {
    id: 454, question: 'Where is Aberaeron?', answers: [{ type: 'exact', lat: 52.25, lng: -4.25 }], type: 'ukcities',
  },
  {
    id: 455, question: 'Where is Newtown Saint Boswells?', answers: [{ type: 'exact', lat: 55.583333, lng: -2.683333 }], type: 'ukcities',
  },
  {
    id: 456, question: 'Where is Enfield?', answers: [{ type: 'exact', lat: 51.666667, lng: -0.066667 }], type: 'ukcities',
  },
  {
    id: 457, question: 'Where is Stoke-on-Trent?', answers: [{ type: 'exact', lat: 53, lng: -2.183333 }], type: 'ukcities',
  },
  {
    id: 458, question: 'Where is Sutton?', answers: [{ type: 'exact', lat: 51.35, lng: -0.2 }], type: 'ukcities',
  },
  {
    id: 459, question: 'Where is Dudley?', answers: [{ type: 'exact', lat: 52.5, lng: -2.083333 }], type: 'ukcities',
  },
  {
    id: 460, question: 'Where is Wrecsam?', answers: [{ type: 'exact', lat: 53.05, lng: -3 }], type: 'ukcities',
  },
  {
    id: 461, question: 'Where is Aberdeen?', answers: [{ type: 'exact', lat: 57.133333, lng: -2.1 }], type: 'ukcities',
  },
  {
    id: 462, question: 'Where is Bolton?', answers: [{ type: 'exact', lat: 53.583333, lng: -2.433333 }], type: 'ukcities',
  },
  {
    id: 463, question: 'Where is Warrington?', answers: [{ type: 'exact', lat: 53.383333, lng: -2.6 }], type: 'ukcities',
  },
  {
    id: 464, question: 'Where is Salford?', answers: [{ type: 'exact', lat: 53.483333, lng: -2.266667 }], type: 'ukcities',
  },
  {
    id: 465, question: 'Where is Kensington?', answers: [{ type: 'exact', lat: 51.504699, lng: -0.199827 }], type: 'ukcities',
  },
  {
    id: 466, question: 'Where is Doncaster?', answers: [{ type: 'exact', lat: 53.533333, lng: -1.116667 }], type: 'ukcities',
  },
  {
    id: 467, question: 'Where is Swindon?', answers: [{ type: 'exact', lat: 51.516667, lng: -1.783333 }], type: 'ukcities',
  },
  {
    id: 468, question: 'Where is Pen-y-Bont ar Ogwr?', answers: [{ type: 'exact', lat: 51.505833, lng: -3.577222 }], type: 'ukcities',
  },
  {
    id: 469, question: 'Where is Catford?', answers: [{ type: 'exact', lat: 51.45, lng: -0.016667 }], type: 'ukcities',
  },
  {
    id: 470, question: 'Where is Coleraine?', answers: [{ type: 'exact', lat: 55.13489, lng: -6.66873 }], type: 'ukcities',
  },
  {
    id: 471, question: 'Where is Barnsley?', answers: [{ type: 'exact', lat: 53.55, lng: -1.483333 }], type: 'ukcities',
  },
  {
    id: 472, question: 'Where is Caerdydd?', answers: [{ type: 'exact', lat: 51.5, lng: -3.2 }], type: 'ukcities',
  },
  {
    id: 473, question: 'Where is Poole?', answers: [{ type: 'exact', lat: 50.716667, lng: -2 }], type: 'ukcities',
  },
  {
    id: 474, question: 'Where is Bracknell?', answers: [{ type: 'exact', lat: 51.416667, lng: -0.75 }], type: 'ukcities',
  },
  {
    id: 475, question: 'Where is Wakefield?', answers: [{ type: 'exact', lat: 53.7, lng: -1.483333 }], type: 'ukcities',
  },
  {
    id: 476, question: 'Where is Thornbury?', answers: [{ type: 'exact', lat: 51.608889, lng: -2.520278 }], type: 'ukcities',
  },
  {
    id: 477, question: 'Where is Wokingham?', answers: [{ type: 'exact', lat: 51.416667, lng: -0.833333 }], type: 'ukcities',
  },
  {
    id: 478, question: 'Where is Falkirk?', answers: [{ type: 'exact', lat: 56, lng: -3.766667 }], type: 'ukcities',
  },
  {
    id: 479, question: 'Where is Haddington?', answers: [{ type: 'exact', lat: 55.933333, lng: -2.766667 }], type: 'ukcities',
  },
  {
    id: 480, question: 'Where is Abertawe?', answers: [{ type: 'exact', lat: 51.633333, lng: -3.966667 }], type: 'ukcities',
  },
  {
    id: 481, question: 'Where is Beverley?', answers: [{ type: 'exact', lat: 53.833333, lng: -0.416667 }], type: 'ukcities',
  },
  {
    id: 482, question: 'Where is Croydon?', answers: [{ type: 'exact', lat: 51.383333, lng: -0.1 }], type: 'ukcities',
  },
  {
    id: 483, question: 'Where is South Shields?', answers: [{ type: 'exact', lat: 54.987778, lng: -1.421389 }], type: 'ukcities',
  },
  {
    id: 484, question: 'Where is Morden?', answers: [{ type: 'exact', lat: 51.398217, lng: -0.19837 }], type: 'ukcities',
  },
  {
    id: 485, question: 'Where is Lochgilphead?', answers: [{ type: 'exact', lat: 56.033333, lng: -5.416667 }], type: 'ukcities',
  },
  {
    id: 486, question: 'Where is Worcester?', answers: [{ type: 'exact', lat: 52.2, lng: -2.2 }], type: 'ukcities',
  },
  {
    id: 487, question: 'Where is Matlock?', answers: [{ type: 'exact', lat: 53.133333, lng: -1.533333 }], type: 'ukcities',
  },
  {
    id: 488, question: 'Where is Shrewsbury?', answers: [{ type: 'exact', lat: 52.716667, lng: -2.733333 }], type: 'ukcities',
  },
  {
    id: 489, question: 'Where is Truro?', answers: [{ type: 'exact', lat: 50.261667, lng: -5.043333 }], type: 'ukcities',
  },
  {
    id: 490, question: 'Where is Hereford?', answers: [{ type: 'exact', lat: 52.05, lng: -2.716667 }], type: 'ukcities',
  },
  {
    id: 491, question: 'Where is Newport?', answers: [{ type: 'exact', lat: 51.583333, lng: -2.983333 }], type: 'ukcities',
  },
  {
    id: 492, question: 'Where is Oakham?', answers: [{ type: 'exact', lat: 52.666667, lng: -0.733333 }], type: 'ukcities',
  },
  {
    id: 493, question: 'Where is Milton Keynes?', answers: [{ type: 'exact', lat: 52.033333, lng: -0.7 }], type: 'ukcities',
  },
  {
    id: 494, question: 'Where is Dagenham?', answers: [{ type: 'exact', lat: 51.55, lng: 0.166667 }], type: 'ukcities',
  },
  {
    id: 495, question: 'Where is Conwy?', answers: [{ type: 'exact', lat: 53.283333, lng: -3.833333 }], type: 'ukcities',
  },
  {
    id: 496, question: 'Where is Dalkeith?', answers: [{ type: 'exact', lat: 55.866667, lng: -3.066667 }], type: 'ukcities',
  },
  {
    id: 497, question: 'Where is Enniskillen?', answers: [{ type: 'exact', lat: 54.3466, lng: -7.64114 }], type: 'ukcities',
  },
  {
    id: 498, question: 'Where is Hamilton?', answers: [{ type: 'exact', lat: 55.766667, lng: -4.033333 }], type: 'ukcities',
  },
  {
    id: 499, question: 'Where is Hendon?', answers: [{ type: 'exact', lat: 51.6, lng: -0.216667 }], type: 'ukcities',
  },
  {
    id: 500, question: 'Where is Hammersmith?', answers: [{ type: 'exact', lat: 51.5, lng: -0.233333 }], type: 'ukcities',
  },
  {
    id: 501, question: 'Where is Bromley?', answers: [{ type: 'exact', lat: 51.4, lng: 0.05 }], type: 'ukcities',
  },
  {
    id: 502, question: 'Where is Telford?', answers: [{ type: 'exact', lat: 52.633333, lng: -2.5 }], type: 'ukcities',
  },
  {
    id: 503, question: 'Where is Harrow?', answers: [{ type: 'exact', lat: 51.583333, lng: -0.316667 }], type: 'ukcities',
  },
  {
    id: 504, question: 'Where is Ealing?', answers: [{ type: 'exact', lat: 51.488802, lng: -0.30479 }], type: 'ukcities',
  },
  {
    id: 505, question: 'Where is Slough?', answers: [{ type: 'exact', lat: 51.5, lng: -0.583333 }], type: 'ukcities',
  },
  {
    id: 506, question: 'Where is Wolverhampton?', answers: [{ type: 'exact', lat: 52.583333, lng: -2.133333 }], type: 'ukcities',
  },
  {
    id: 507, question: 'Where is Dumbarton?', answers: [{ type: 'exact', lat: 55.95, lng: -4.566667 }], type: 'ukcities',
  },
  {
    id: 508, question: 'Where is Bangor?', answers: [{ type: 'exact', lat: 54.66166, lng: -5.66545 }], type: 'ukcities',
  },
  {
    id: 509, question: 'Where is Wallsend?', answers: [{ type: 'exact', lat: 54.991389, lng: -1.559722 }], type: 'ukcities',
  },
  {
    id: 510, question: 'Where is Strabane?', answers: [{ type: 'exact', lat: 54.8224, lng: -7.46844 }], type: 'ukcities',
  },
  {
    id: 511, question: 'Where is City of Westminster?', answers: [{ type: 'exact', lat: 51.5, lng: -0.116667 }], type: 'ukcities',
  },
  {
    id: 512, question: 'Where is Lincoln?', answers: [{ type: 'exact', lat: 53.233333, lng: -0.533333 }], type: 'ukcities',
  },
  {
    id: 513, question: 'Where is Newport?', answers: [{ type: 'exact', lat: 50.7, lng: -1.3 }], type: 'ukcities',
  },
  {
    id: 514, question: 'Where is Lisburn?', answers: [{ type: 'exact', lat: 54.50991, lng: -6.0404 }], type: 'ukcities',
  },
  {
    id: 515, question: 'Where is Aylesbury?', answers: [{ type: 'exact', lat: 51.816667, lng: -0.8 }], type: 'ukcities',
  },
  {
    id: 516, question: 'Where is Wallasey?', answers: [{ type: 'exact', lat: 53.433333, lng: -3.066667 }], type: 'ukcities',
  },
  {
    id: 517, question: 'Where is Grimsby?', answers: [{ type: 'exact', lat: 53.533333, lng: -0.05 }], type: 'ukcities',
  },
  {
    id: 518, question: 'Where is Kilmarnock?', answers: [{ type: 'exact', lat: 55.633333, lng: -4.533333 }], type: 'ukcities',
  },
];
