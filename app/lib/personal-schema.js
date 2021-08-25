import { emoteMetadata } from 'qol-bar-utils/lib/ffxiv/emotes';

const jobCategories = [
  {
    name: 'Tanks',
    jobs: [
      { name: 'PLD', iconId: 62119, gearsetId: 1 },
      { name: 'WAR', iconId: 62121, gearsetId: 2 },
      { name: 'DRK', iconId: 62132, gearsetId: 3 },
      { name: 'GNB', iconId: 62137, gearsetId: 4 },
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
      { name: 'MNK', iconId: 62120, gearsetId: 8 },
      { name: 'DRG', iconId: 62122, gearsetId: 9 },
      { name: 'NIN', iconId: 62130, gearsetId: 10 },
      { name: 'SAM', iconId: 62134, gearsetId: 11 },
      { name: 'BRD', iconId: 62123, gearsetId: 12 },
      { name: 'MCH', iconId: 62131, gearsetId: 13 },
      { name: 'DNC', iconId: 62138, gearsetId: 14 },
      { name: 'BLM', iconId: 62125, gearsetId: 15 },
      { name: 'SMN', iconId: 62127, gearsetId: 16 },
      { name: 'RDM', iconId: 62135, gearsetId: 17 },
      { name: 'BLU', iconId: 62136, gearsetId: 18 },
    ],
  },
  {
    name: 'Crafters',
    jobs: [
      { name: 'CRP', iconId: 62108, gearsetId: 19 },
      { name: 'BSM', iconId: 62109, gearsetId: 20 },
      { name: 'ARM', iconId: 62110, gearsetId: 21 },
      { name: 'GSM', iconId: 62111, gearsetId: 22 },
      { name: 'LTW', iconId: 62112, gearsetId: 23 },
      { name: 'WVR', iconId: 62113, gearsetId: 24 },
      { name: 'ALC', iconId: 62114, gearsetId: 25 },
      { name: 'CUL', iconId: 62115, gearsetId: 26 },
    ],
  },
  {
    name: 'Gatherers',
    jobs: [
      { name: 'MIN', iconId: 62116, gearsetId: 27 },
      { name: 'BTN', iconId: 62117, gearsetId: 28 },
      { name: 'FSH', iconId: 62118, gearsetId: 28 },
    ],
  },
];

const jobsBar = {
  iconId: 15,
  tooltip: 'Jobs',
  categorySpacing: [0, 0],
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

const visibleEmotes = [
  '/wave',
  '/point',
  '/clap',
  '/cheer',
  '/playdead',
  '/box',
  '/slap',
  '/cheerwave',
  '/cheerjump',
  '/cheeron',
  '/dance',
  '/sidestep',
  '/beesknees',
  '/heeltoe',
];

const visibleEmotesMetadata = emoteMetadata.filter((emoteMeta) =>
  visibleEmotes.includes(emoteMeta.textCommand)
);

const emotesBar = {
  iconId: 61182,
  iconArgument: 'h',
  tooltip: 'Emotes',
  categoryFontScale: 0.5,
  categoryWidth: 200,
  subList: [
    {
      iconId: 9,
      tooltip: 'Emote List',
      command: '/emotelist',
    },
    ...visibleEmotesMetadata.map((emoteMetadata) => ({
      command: emoteMetadata.textCommand,
      tooltip: emoteMetadata.name,
      iconId: emoteMetadata.iconId,
    })),
  ].reverse(),
};

const raidBar = {
  iconId: 70,
  tooltip: 'Raid',
  categoryFontScale: 0.75,
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
  categoryNoBackground: false,
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
  categoryStaysOpen: true,
  categoryNoBackground: false,
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
  iconId: 29,
  tooltip: 'Misc',
  subList: [
    {
      iconId: 112,
      tooltip: 'Teleport',
      command: '/teleport',
    },
    {
      iconId: 111,
      tooltip: 'Return',
      command: '/return',
    },
    {
      iconId: 64308,
      tooltip: 'Market Board',
      command: '/pmb',
    },
    {
      iconId: 58,
      tooltip: 'Mount Guide',
      command: '/mountguide',
    },
    {
      iconId: 59,
      tooltip: 'Minion Guide',
      command: '/minionguide',
    },
    {
      iconId: 47,
      tooltip: 'Timers',
      command: '/timers',
    },
    {
      iconId: 54,
      tooltip: 'Party Finder',
      command: '/partyfinder',
    },
  ].reverse(),
};

export const schema = [
  jobsBar,
  emotesBar,
  raidBar,
  waymarksBar,
  signsBar,
  miscBar,
];
