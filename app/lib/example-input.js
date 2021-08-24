export const exampleQolBarExportString =
  'H4sIAAAAAAAEAO1YW2+bMBT+K8je21iKDTQETZMSuq3b6GVJqz5MfXCIm2RpIALSKKr633dIgVyKHQqZ1Ic+RPE5HH8+l88Hm0f0IV7OOLIRRyrqU2Q/5hqQVOTDgFKm/A5cpcNC0EQusv+sraLMyrZHx4RYFOOv0yDmEahjZBMVefDwiCe6+3EUSxCOZsHYTwy8TWF8AdZaQ1PhdwtiF9mJhLzeDB5YqnH7pBaBDZjv8QwsE6qC9TmPJj5fReXtKqqCeiPOwwwwE6qCzdgy5NGMe3Hu47aqspf3bJY7+TyuCsXnIZ+wDCyXKod8z5YDzgZ5vGu5crCBH40HG1VZy7WqHPhbdV6JtQD/zqezLchUUQt0wR74FmiqeDsFWrUWxX3uIy8aSwnQW4nVDbQramXmBpjD+LyD7DiccxiePo8KHYPuR0yMfwb9deOTdUpKSAvjS7e93SaHnIURjxVvxPwhV8iefkuJDv32pPsLFc+3DpIUPfl3kuRks8AsyU0PdA3zVUkCl6mB8c3pmTRwfW/g1MK455wKAqfVKZbmVce43bsSwBtvMq/Av44rzytp7U9sExJ7di6I3KydWA3j8x8i+OO68BTq1umeCOCbtb0H7vbaZwL4Vm3446SE1wJ4or1B2lkabESneymnXXMf7SwN2mGnJ8osqcs7iwDv2l0hPqmNTzD+Lva/bkOyCDR69+pGhK/Xxtel+CU7ngQfdk7bdUT4Jd9UEnzofs61K8Iv2VhevXXSU4Js65TB7F3k08rCClLRBJ53HeWj4gRzPx4EC3/nJhbCAWwJpztvItmTurY+Aacwil6y/RQ5Rs2XeLTGnqYF/tEa/pEC/+r0HFLgX9n2LSisCe+GblI7xUmL97KcB2J4br1JwW+J1Su4uGDLKQsnu98BvFGgjMayrwDpRCW/KG4qaka4GZnMeT4cLn2+KPB9/UQYAPf5dBmNh77C4ph5E6J8jr/k9xXBw8p36h08KluMHngxXbaYfuDFDNlixoEXM2WLmeUXK0vGkpsqZd+A3wmpeXe3eGfnOzv/NztBzcBURX14a1D455nJ6kbRIFbTammGZaqftAbVqGbRpqnDrAjMkwWi9TnH72SURw/Jy71BGnrDQE//ADR6GuKeFgAA';

const emotes = [
  '/wave',
  '/point',
  '/clap',
  '/cheer',
  // '/playdead',
  // '/box',
  // '/slap',
  // '/cheerwave',
  // '/cheerjump',
  // '/cheeron',
  // '/dance',
  // '/sidestep',
  // '/beesknees',
  // '/heeltoe',
];

const emotesBar = {
  iconId: 61182,
  iconArgument: 'h',
  tooltip: 'Emotes',
  categoryWidth: 200,
  subList: emotes.map((emoteComand) => ({
    name: emoteComand,
    command: emoteComand,
  })),
};

const jobCategories = [
  {
    name: 'Tanks',
    jobs: [
      { name: 'PLD', iconId: 62119, gearsetId: 1 },
      { name: 'WAR', iconId: 1, gearsetId: 2 },
      { name: 'DRK', iconId: 62132, gearsetId: 3 },
      { name: 'GNB', iconId: 1, gearsetId: 4 },
    ],
  },
  {
    name: 'Healers',
    jobs: [
      { name: 'WHM', iconId: 62124, gearsetId: 5 },
      { name: 'SCH', iconId: 62128, gearsetId: 6 },
      { name: 'AST', iconId: 62133, gearsetId: 7 },
    ],
  },
  {
    name: 'DPS',
    jobs: [
      { name: 'MNK', iconId: 1, gearsetId: 8 },
      { name: 'DRG', iconId: 1, gearsetId: 9 },
      { name: 'NIN', iconId: 62130, gearsetId: 10 },
      { name: 'SAM', iconId: 62134, gearsetId: 11 },
      { name: 'BRD', iconId: 62123, gearsetId: 12 },
      { name: 'MCH', iconId: 1, gearsetId: 13 },
      { name: 'DNC', iconId: 1, gearsetId: 14 },
      { name: 'BLM', iconId: 62125, gearsetId: 15 },
      { name: 'SMN', iconId: 62127, gearsetId: 16 },
      { name: 'RDM', iconId: 1, gearsetId: 17 },
      { name: 'BLU', iconId: 62136, gearsetId: 18 },
    ],
  },
  {
    name: 'Crafters',
    jobs: [
      { name: 'CRP', iconId: 62808, gearsetId: 19 },
      { name: 'BSM', iconId: 62809, gearsetId: 20 },
      { name: 'ARM', iconId: 62810, gearsetId: 21 },
      { name: 'GSM', iconId: 62811, gearsetId: 22 },
      { name: 'LTW', iconId: 62812, gearsetId: 23 },
      { name: 'WVR', iconId: 62813, gearsetId: 24 },
      { name: 'ALC', iconId: 62814, gearsetId: 25 },
      { name: 'CUL', iconId: 62815, gearsetId: 26 },
    ],
  },
  {
    name: 'Gatherers',
    jobs: [
      { name: 'MIN', iconId: 1, gearsetId: 27 },
      { name: 'BTN', iconId: 1, gearsetId: 28 },
      { name: 'FSH', iconId: 1, gearsetId: 28 },
    ],
  },
];

const jobsBar = {
  iconId: 15,
  tooltip: 'Jobs',
  subList: jobCategories.map((jobCategory) => {
    let firstJob = jobCategory.jobs.shift();
    return {
      tooltip: firstJob.name,
      iconId: firstJob.iconId,
      command: `/gearset change ${firstJob.gearsetId}`,
      categoryColumns: 12,
      subList: jobCategory.jobs.map((job) => ({
        tooltip: job.name,
        iconId: job.iconId,
        command: `/gearset change ${job.gearsetId}`,
      })),
    };
  }),
};

const raidBar = {
  iconId: 70,
  tooltip: 'Raid',
  subList: [
    {
      iconId: 56,
      tooltip: 'Ready Check',
      command: '/readycheck',
    },
    ...[5, 10, 15, 20, 25, 30].map((interval) => ({
      name: `${interval}`,
      command: `/countdown ${interval}`,
    })),
  ].reverse(),
};

const waymarksBar = {
  iconId: 55,
  tooltip: 'Waymarks',
  subList: [
    {
      iconId: 60026,
      tooltip: 'Clear',
      command: '/waymark clear',
    },
    {
      iconId: 61341,
      tooltip: 'A',
      command: '/waymark a',
    },
    {
      iconId: 61342,
      tooltip: 'B',
      command: '/waymark b',
    },
    {
      iconId: 61343,
      tooltip: 'C',
      command: '/waymark c',
    },
    {
      iconId: 61347,
      tooltip: 'D',
      command: '/waymark d',
    },
    {
      iconId: 61344,
      tooltip: '1',
      command: '/waymark 1',
    },
    {
      iconId: 61345,
      tooltip: '2',
      command: '/waymark 2',
    },
    {
      iconId: 61346,
      tooltip: '3',
      command: '/waymark 3',
    },
    {
      iconId: 61348,
      tooltip: '4',
      command: '/waymark 4',
    },
  ].reverse(),
};

const signsBar = {
  iconId: 10,
  tooltip: 'Signs',
  scale: 1.5,
  stayOpenOnSelect: true,
  subList: [
    {
      iconId: 60026,
      tooltip: 'Clear',
      command: '/enemysign clear',
    },
    {
      iconId: 60701,
      tooltip: 'Attack 1',
      command: '/enemysign attack1 <t>',
    },
    {
      iconId: 60702,
      tooltip: 'Attack 2',
      command: '/enemysign attack2 <t>',
    },
    {
      iconId: 60703,
      tooltip: 'Attack 3',
      command: '/enemysign attack3 <t>',
    },
    {
      iconId: 60704,
      tooltip: 'Attack 4',
      command: '/enemysign attack4 <t>',
    },
    {
      iconId: 60705,
      tooltip: 'Attack 5',
      command: '/enemysign attack5 <t>',
    },
    {
      iconId: 60706,
      tooltip: 'Bind 1',
      command: '/enemysign bind1 <t>',
    },
    {
      iconId: 60707,
      tooltip: 'Bind 2',
      command: '/enemysign bind2 <t>',
    },
    {
      iconId: 60708,
      tooltip: 'Bind 3',
      command: '/enemysign bind3 <t>',
    },
    {
      iconId: 60709,
      tooltip: 'Ignore 1',
      command: '/enemysign ignore1 <t>',
    },
    {
      iconId: 60710,
      tooltip: 'Ignore 2',
      command: '/enemysign ignore2 <t>',
    },
    {
      iconId: 60712,
      tooltip: 'Circle',
      command: '/enemysign circle <t>',
    },
    {
      iconId: 60713,
      tooltip: 'Cross',
      command: '/enemysign cross <t>',
    },
    {
      iconId: 60711,
      tooltip: 'Square',
      command: '/enemysign square <t>',
    },
    {
      iconId: 60714,
      tooltip: 'Triangle',
      command: '/enemysign triangle <t>',
    },
    // {
    //   iconId: 9,
    //   tooltip: 'Signs',
    //   command: '/mk',
    // },
  ].reverse(),
};

const miscBar = {
  iconId: 61105,
  tooltip: 'Misc',
  subList: [
    {
      tooltip: 'Teleport',
      command: '/teleport',
    },
    {
      tooltip: 'Return',
      command: '/return',
    },
    {
      tooltip: 'Market Board',
      command: '/pmb',
    },
  ],
};

export const exampleSchema = [
  jobsBar,
  emotesBar,
  raidBar,
  waymarksBar,
  signsBar,
  miscBar,
];
