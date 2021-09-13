// n7
const ship1 = [
  'm30 89-19-4v6l19 8 19-8v-6l-19 4zm13-46V31l3-5v-9l-3-3V5h5l12 19v11l-7 29zM30 63v26L8 84V64zM17 44V31l-3-5v-9l3-3V5h-5L1 24v11l7 29zm13 19v26l23-5V64l-23-2z',//0
  'm2 40 6 1 2 8-4 7zm40 3-12-2-13 2-9 21 22-2 23 2-10-21zm17-3-6 1-2 8 4 7z',//1
  'm30 68 8 2v17m-8-19-8 2v17m8-25V41M15 5V0m31 5V1M9 20v8l4 4v4H1m51-16v8l-3 4v4h11'//2
];
// n4
const ship2 = [
  'M28 0c-9 11-11 25-11 25V83h23V26S37 11 28 0z',
  'M22 54s-4 11-12 17-9 14-9 14h21zm13 0s4 11 12 17 9 14 9 14H34zM22 85h13v8h-13z',
  'M28 32c-8 4-8 25-8 25v30h17V57s0-21-8-25z',
  'M30 97h-3V70a1 1 0 0 1 1-1 1 1 0 0 1 1 1zM20 63l4 2v9l-4 2V63zm17 0-4 2v9l4 2z',
  'M11 85v-7m4 7V74m29 11v-7m-4 7V74'
];
// n1
const ship3 = [
  'M31 37 19 2l-3-1-3 1L3 37 1 64v19l6 10 10 6 10-6 6-10z',
  'm9 15 3 5-2 10-6 3zm15 0-3 5 3 10 6 3zM7 93l10-9 10 9-10 6zm9-45L6 60v3l10-7 12 7v-3z',
  'M16 48V1m13 35h-5m7 4h-8m-15 0H3m7-4H2m14 20L6 63v17h22V63z'
];
// n2
const ship4 = [
  'M22 25 14 1 7 25 1 49v23l14 15 14-15V49z',
  'm21 52-6-10-6 10-5 10v9l11 6 11-6v-9zM8 21l3 5-2 13-6 4zm13 0-3 5 3 13 6 4z',
  'M14 1v22m0 5v5'
];
// n3
const ship5 = [
  "M5 80H23V93H5z",
  "M13 2C0 7 1 22 1 22v63h26V22S26 7 14 2z",
  "M16 99h-4V58a2 3 0 0 1 2-3 3 3 0 0 1 2 3zm-2-84s-7 0-9 5h18c-2-5-9-5-9-5zM1 48l7 4v14L1 70v-22zm26 0-7 4v14l7 3z",
  "M26 22H1M26 27h-8m8 3h-8m-10-3H1m8 3H1"
];

const ship6 = [
  "M39 22 32 1 26 22l-6 22v20L32 99l12-34v-20z",
  "m37 47-5-9-5 9-5 9v8l10 5 10-5v-8zm7-2 14 20v14L44 64zM27 19l3 5-3 12-5 3zm11 0-3 5 3 12 5 3zM20 44 6 64v14l14-14z",
  "M16 50v5l-3 4-4 0zm31 0v5l3 4 4 0z",
  "M32 1v24m0 3v7"
];

const ship7 = [
  "m50 39-7-24-7 24-6 24V84l14 14 14-14V62z",
  "m49 35 23-13L68 1l14 11 4 23-30 22zM37 35 14 22 19 1 5 11 1 34l30 23z",
  "M49 65a6 6 0 0 0-10 0l-5 9V83l10-4L54 83v-9zM37 35l3 5-3 13-6 4zm12 0-3 5 3 13 7 4zM80 39l-9-5-8 6 1 11zM69 5l5 4 1 6-3 5zM8 39l10-5 8 7-1 11zM18 5l-6 4-1 6 3 5z",
  "M43 15v20m0 5v5M77 28 52 43M35 43 10 28"
];

//-9-11 60 120
const ship8 = [
  "M16 1C9 8-11 34 9 93v5h17v-5c20-59 0-85-7-92a3 3 0 0 0-4 1z",
  "M18 22V99M10 21v8m15 0v-8M10 31v4m15 0v-4",
  "M18 22a44 45 1 0 0 13-2c-4-10-8-16-11-19a3 3 0 0 0-4 0C13 4 8 10 5 20a45 45 0 0 0 13 2zM18 59a3 3 0 0 0-3 3V95h6V61a3 3 0 0 0-3-2z"
];

const wings1 = [
  "M8 37 4 40 1 37V11L4 1l4 11v25z",
  "M21 33h16V13H21L8 18v12l13 3zM1 15l4 3V28L1 33V15z",
  "M13 16v7m4-8v6"
];

const wings2 = [
  "M23 1 8 23v16l15-16 14 0V1H23z",
  "M8 8v42L1 43V30l7-22z",
  "M1 30h7v9H1z",
  "M18 8v6l-3 5-4 1L18 8z"
];

const wings3 = [
  "M33 24S27 41 14 50 1 71 1 71h42V1z",
  "M24 71v-15m-6 15V59"
];

const wings4 = [
  "M6 1c-5 5-5 17-5 17v50h10V17S12 5 6 1z",
  "M12 70H0l1-7h10l1 7zm-1-28h14v7H11z",
  "M7 18H1M7 24H1"
];

const wings5 = [
  "M8 26h4v15H8zm11-7h4V47H19zm36 16V10l-21 5v18z",
  "M34 33H15V20l19-8v21z",
  "M15 33H1v-6l14-5v11zm3-14 2 3 8-3 2-5-12 5zM55 1 38 9v5l17-4z"
];

const wings6 = [
  "M22 6 7 15v15l15-3 14 0V6H22z",
  "M7 1v40L1 34V22L7 1zm4 12c0 0 0 8 0 8L16 26V10"
];

const wings7 = [
  "M9 6h4v16h-4zM21 1h4v20h-4z",
  "M16 15H1v6l16 5zM59 41l-22-7V15h22z",
  "M37 15H16v14l21 8zM1 22V7l3-3v18z",
  "M19 30l2-4 8 3 2 6z"
];

const wings8 = [
  "M41 1 4 28a8 8 0 0 0-3 6v6l40-9z",
  "m20 16 2 7m-9-2 1 5",
  "m1 36 40-13"
];


const PIECE_KEY = 'pieces';
const SCALE_KEY = 'scale';
const TRANSLATE_KEY = 'translate';
const LEFT_WING_TRANSLATE_KEY = 'leftTranslate';
const RIGHT_WING_TRANSLATE_KEY = 'rightTranslate';
const STYLES_KEY = 'styles';

const ENCODED_SHAPES = {
  0: {
    [PIECE_KEY]: ship1,
    [TRANSLATE_KEY]: [-6, 20],
    [SCALE_KEY]: [0.75, 0.75],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  1: {
    [PIECE_KEY]: ship2,
    [TRANSLATE_KEY]: [-10, 0],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [1, 1, 0, 1]
  },
  2: {
    [PIECE_KEY]: ship3,
    [TRANSLATE_KEY]: [4, 10],
    [SCALE_KEY]: [0.9, 0.9],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  3: {
    [PIECE_KEY]: ship4,
    [TRANSLATE_KEY]: [4, 10],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [0, 1, 0, 1],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  4: {
    [PIECE_KEY]: ship5,
    [TRANSLATE_KEY]: [4.5, 0],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [1, 0, 1, 1]
  },
  5: {
    [PIECE_KEY]: ship6,
    [TRANSLATE_KEY]: [-14, 0],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  6: {
    [PIECE_KEY]: ship7,
    [TRANSLATE_KEY]: [-26, -10],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [0, 0, 1, 0]
  },
  7: {
    [PIECE_KEY]: ship8,
    [TRANSLATE_KEY]: [0.5, 0],
    [SCALE_KEY]: [1, 1],
    [STYLES_KEY]: [0, 0, 1, 0]
  },
  8: {
    [PIECE_KEY]: ship7,
    [TRANSLATE_KEY]: [-18, -90],
    [SCALE_KEY]: [0.7, -1.4],
    [STYLES_KEY]: [0, 1, 0, 0]
  }
};

const ENCODED_WINGS = {
  0: {
    [PIECE_KEY]: wings1,
    [TRANSLATE_KEY]: [5.5, 50],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [-20, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-47, 0],
    [STYLES_KEY]: [0, 1, 0]
  },
  1: {
    [PIECE_KEY]: wings2,
    [TRANSLATE_KEY]: [5.5, 60],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [-25, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-50, 0],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  2: {
    [PIECE_KEY]: wings3,
    [TRANSLATE_KEY]: [11.5, 45],
    [SCALE_KEY]: [0.70, 0.70],
    [LEFT_WING_TRANSLATE_KEY]: [-40, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-70, 0],
    [STYLES_KEY]: [1, 0]
  },
  3: {
    [PIECE_KEY]: wings4,
    [TRANSLATE_KEY]: [0, 28],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [-6.5, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-43.5, 0],
    [STYLES_KEY]: [0, 1, 0]
  },
  4: {
    [PIECE_KEY]: wings5,
    [TRANSLATE_KEY]: [7, 52],
    [SCALE_KEY]: [0.85, 0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-53, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-81, 0],
    [STYLES_KEY]: [0, 1, 0]
  },
  5: {
    [PIECE_KEY]: wings6,
    [TRANSLATE_KEY]: [5, 45],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [-20, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-46, 0],
    [STYLES_KEY]: [1, 0]
  },
  6: {
    [PIECE_KEY]: wings7,
    [TRANSLATE_KEY]: [-1.5, 52],
    [SCALE_KEY]: [0.85, 0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-45, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-90, 0],
    [STYLES_KEY]: [0, 1, 0, 1]
  },
  7: {
    [PIECE_KEY]: wings8,
    [TRANSLATE_KEY]: [-4, 70],
    [SCALE_KEY]: [0.85, 0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-20, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-70, 0],
    [STYLES_KEY]: [1, 1]
  },
  8: {
    [PIECE_KEY]: wings1,
    [TRANSLATE_KEY]: [-1, -95],
    [SCALE_KEY]: [1.5, -1],
    [LEFT_WING_TRANSLATE_KEY]: [-20, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-47, 0],
    [STYLES_KEY]: [1,0, 0]
  },
  9: {
    [PIECE_KEY]: wings7,
    [TRANSLATE_KEY]: [-1.5, -98],
    [SCALE_KEY]: [0.85, -0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-45, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-90, 0],
    [STYLES_KEY]: [1, 0, 1, 0]
  },
  10: {
    [PIECE_KEY]: wings3,
    [TRANSLATE_KEY]: [1.5, 170],
    [SCALE_KEY]: [1.10, 0.30],
    [LEFT_WING_TRANSLATE_KEY]: [-38, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-68, 0],
    [STYLES_KEY]: [0, 1]
  },
  11: {
    [PIECE_KEY]: wings7,
    [TRANSLATE_KEY]: [-1.5, 28],
    [SCALE_KEY]: [0.85, 0.85],
    [LEFT_WING_TRANSLATE_KEY]: [-45, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [-90, 0],
    [STYLES_KEY]: [1, 1, 0, 1]
  },
  12: {
    [PIECE_KEY]: [],
    [TRANSLATE_KEY]: [0, 0],
    [SCALE_KEY]: [1, 1],
    [LEFT_WING_TRANSLATE_KEY]: [0, 0],
    [RIGHT_WING_TRANSLATE_KEY]: [0, 0],
    [STYLES_KEY]: []
  }
};

const palletes = [
  [],                             // 0
  [0.95, 0.5, 108, 0.5, 0.9, 1],  // 1
  [0.7, 1, 0, 5, 1.1, 0],         // 2
  [0.7, 1, 45, 1, 1.3, 0],        // 3
  [0.6, 1, 90, 3, 1.1, 0],        // 4
  [0.4, 1, 135, 12, 1.1, 0],      // 5
  [0.6, 1, 180, 6, 1.3, 0],       // 6
  [0.12, 1, 225, 3, 3.9, 0],      // 7
  [0.4, 1, 270, 3, 1.2, 0],       // 8
  [0.4, 1, 320, 4, 1.3, 0],       // 9
  [0.9, 1, 0, 2, 0.8, 1],           //10
  [1.6, 1, 38, 13, 2, 1],          // 11
  [1.01, 1, 90, 4, 1.0, 1],          // 12
  [1.4, 1, 135, 13, 1.5, 1],       // 13
  [0.83, 1, 180, 18, 1, 1],       // 14
  [0.65, 1, 225, 6, 1, 1],        // 15
  [1.1, 1, 270, 18, 0.9, 1],         // 16
  [0.75, 1, 315, 8, 1, 1]         // 17
];

const backgroundConfig = [
  [-1, 0], [0, 0], [1, 0], [2, 0], [3, 0], [4, 0],
  [-1, 1], [0, 1], [1, 1], [2, 1], [3, 1], [4, 1]
];


const FACTION_NAMES = [
  'shadow proclamation',
  'skulz',
  'borgz',
  'rebels',
  'the empire',
  'federation'
];
const BASE_NAMES = [
  'icarus',
  'uscss',
  'x-78',
  'nightfly',
  'z-wolf',
  'legacy',
  'bebop',
  'yamato',
  'nautilus',
  'hyperion'
];
const WINGS_NAMES = [
  'hunter',
  'liberator',
  'explorer',
  'searcher',
  'rider',
  'seeker',
  'skywalker',
  'destroyer',
  'intrepid',
  'explorer',
  'brave',
  'fearless',
  'conqueror',
  ''
];
const GALAXY_NAMES = [
  'milky way',
  'andromeda',
  'hydra',
  'helix',
  'bw tauri',
  'recursive',
  'void',
  'kraken',
  'omega',
  'xix',
  'dark',
  'ultimate'
];

const backCovers = [
  'discount',
  'skulls',
  'biohazard',
  'lobby',
  'target',
  'trellis'
];