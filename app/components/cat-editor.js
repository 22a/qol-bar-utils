import Component from '@glimmer/component';
import { zip as gzip, unzip as gunzip } from 'gzip-js';
import { tracked } from '@glimmer/tracking';
import { base64DecToArr, base64EncArr } from 'qol-bar-editor/lib/base64';

const textDecoder = new TextDecoder();
const clone = (value) => JSON.parse(JSON.stringify(value))
const withDefault = (val, defaultValue) => val === undefined ? defaultValue : val

const defaultTopLevel = {
  "$type": "e",
  "b2": {
    "$type": "b2",
    "n": "22a QoL Bar",
    "sL": [],
    "a": 0,
    "bW": 30,
    "e": false,
    "p": [ 0.20, -0.20 ],
    "s": 2,
    "sp": [ 4, 4 ],
    "nB": true
  },
  "v": "2.1.3.4"
}

const defaultNonLeaf = {
  "$type": "s2",
  "n": "::h61182##Emotes",
  "t": 1,
  "c": "/emotelist",
  "sL": [],
  "iO": [ 0, 0 ],
  "iR": 0,
  "cW": 30,
  "cSp": [ 4, 4 ],
  "cNB": true,
  "cH": true
}

const defaultLeaf = {
  "$type": "s2",
  "n": "/cheeron",
  "c": "/cheeron",
  "iO": [ 0, 0 ],
  "iR": 0,
  "cSp": [ 4, 4 ]
}

const qolExportFromSchema = (schema) => {
  const base = clone(defaultTopLevel)
  base.b2.sL = _qolFromSchema(schema)
  return base;
}

const _qolFromSchema = (schema) => {
  return schema.map(node => {
    let obj;
    if (node.children) {
      obj = clone(defaultNonLeaf)
      obj.sL = _qolFromSchema(node.children)
    } else {
      obj = clone(defaultLeaf)
    }
    if (node.iconId || node.tooltip) {
      node.name = ''
      if (node.iconId) {
        node.name += `::h${node.iconId}`
      }
      if (node.tooltip) {
        node.name += `##${node.tooltip}`
      }
    }
    obj.n = withDefault(node.name, 'DEFAULT')
    obj.c = withDefault(node.command, '/echo DEFAULT COMMAND')
    obj.cC = withDefault(node.columns, 1)
    obj.cS = withDefault(node.scale, 1)
    obj.cF = withDefault(node.fontScale, 1)
    obj.nB = withDefault(node.noBackground, true)
    obj.bW = withDefault(node.buttonWidth, 30)
    obj.cW = withDefault(node.categoryWidth, 30)
    obj.cH = withDefault(node.openOnHover, true)
    obj.cSO = withDefault(node.stayOpenOnSelect, false)
    return obj
  })
}

const barSchema = [
  {
    iconId: 61182, tooltip: "Emotes",
    categoryWidth: 200,
    children: [
      {
        "name": "/point",
        "command": "/point",
      },
      {
        "name": "/dance",
        "command": "/dance",
      },
      {
        "name": "/beesknees",
        "command": "/beesknees",
      },
      {
        "name": "/cheer",
        "command": "/cheer",
      },
      {
        "name": "/payrespects",
        "command": "/payrespects",
      },
      {
        "name": "/clap",
        "command": "/clap",
      },
      {
        "name": "/eureka",
        "command": "/eureka",
      },
      {
        "name": "/playdead",
        "command": "/playdead",
      },
      {
        "name": "/consider",
        "command": "/consider",
      },
      {
        "name": "/cheeron",
        "command": "/cheeron",
      },
      {
        "name": "/cheerjump",
        "command": "/cheerjump",
      },
      {
        "name": "/cheerwave",
        "command": "/cheerwave",
      },
      {
        "name": "/playdead",
        "command": "/playdead",
      },
      {
        "name": "Emote List",
        "command": "/emotelist",
      }
    ]
  },
  {
    iconId: 15, tooltip: "Jobs",
    scale: 1.5,
    children: [
      {
        iconId: 62119, tooltip: "PLA",
        "command": "/gearset change 1",
        "columns": 12,
        scale: 1.5,
        children: [
          {
            iconId: 62132, tooltip: "DRK",
            "command": "/gearset change 8",
          }
        ]
      },
      {
        iconId: 62124, tooltip: "WHM",
        "command": "/gearset change 3",
        "columns": 12,
        scale: 1.5,
        children: [
          {
            iconId: 62128, tooltip: "SCH",
            "command": "/gearset change 2",
          },
          {
            iconId: 62133, tooltip: "AST",
            "command": "/gearset change 4",
          }
        ]
      },
      {
        iconId: 62125, tooltip: "BLM",
        "command": "/gearset change 19",
        "columns": 12,
        scale: 1.5,
        children: [
          {
            iconId: 62127, tooltip: "SMN",
            "command": "/gearset change 5",
          },
          {
            iconId: 62130, tooltip: "NIN",
            "command": "/gearset change 6",
          },
          {
            iconId: 62123, tooltip: "BRD",
            "command": "/gearset change 7",
          },
          {
            iconId: 62134, tooltip: "SAM",
            "command": "/gearset change 9",
          },
          {
            iconId: 62136, tooltip: "BLU",
            "command": "/gearset change 10",
          }
        ]
      },
      {
        iconId: 62808, tooltip: "CRP",
        "command": "/gearset change 17",
        "columns": 12,
        scale: 1.5,
        children: [
          {
            iconId: 62809, tooltip: "BSM",
            "command": "/gearset change 15",
          },
          {
            iconId: 62810, tooltip: "ARM",
            "command": "/gearset change 11",
          },
          {
            iconId: 62811, tooltip: "GSM",
            "command": "/gearset change 12",
          },
          {
            iconId: 62812, tooltip: "LTW",
            "command": "/gearset change 13",
          },
          {
            iconId: 62813, tooltip: "LTW",
            "command": "/gearset change 14",
          },
          {
            iconId: 62814, tooltip: "ALC",
            "command": "/gearset change 18",
          },
          {
            iconId: 62815, tooltip: "CUL",
            "command": "/gearset change 16",
          }
        ]
      }
    ]
  },
  {
    iconId: 70, tooltip: "RC + Countdowns",
    "command": "/readycheck",
    scale: 1.5,
    fontScale: 0.5,
    children: [
      {
        "name": "30",
        "command": "/countdown 30",
      },
      {
        "name": "25",
        "command": "/countdown 25",
      },
      {
        "name": "20",
        "command": "/countdown 20",
      },
      {
        "name": "15",
        "command": "/countdown 15",
      },
      {
        "name": "10",
        "command": "/countdown 10",
      },
      {
        iconId: 56, tooltip: "Ready Check",
        "command": "/readycheck",
      }
    ]
  },
  {
    iconId: 55,
    tooltip: "Waymarks",
    scale: 1.5,
    children: [
      {
        iconId: 60026,
        tooltip: 'Clear',
        "command": "/waymark clear",
      },
      {
        iconId: 61341,
        tooltip: 'A',
        "command": "/waymark a",
      },
      {
        iconId: 61342,
        tooltip: 'B',
        "command": "/waymark b",
      },
      {
        iconId: 61343,
        tooltip: 'C',
        "command": "/waymark c",
      },
      {
        iconId: 61347,
        tooltip: 'D',
        "command": "/waymark d",
      },
      {
        iconId: 61344,
        tooltip: '1',
        "command": "/waymark 1",
      },
      {
        iconId: 61345,
        tooltip: '2',
        "command": "/waymark 2",
      },
      {
        iconId: 61346,
        tooltip: '3',
        "command": "/waymark 3",
      },
      {
        iconId: 61348,
        tooltip: '4',
        "command": "/waymark 4",
      },
    ].reverse()
  },
  {
    iconId: 10,
    tooltip: "Signs",
    scale: 1.5,
    stayOpenOnSelect: true,
    children: [
      {
        iconId: 60026,
        tooltip: 'Clear',
        "command": "/enemysign clear",
      },
      {
        iconId: 60701,
        tooltip: 'Attack 1',
        "command": "/enemysign attack1 <t>",
      },
      {
        iconId: 60702, tooltip: "Attack 2",
        "command": "/enemysign attack2 <t>",
      },
      {
        iconId: 60703, tooltip: "Attack 3",
        "command": "/enemysign attack3 <t>",
      },
      {
        iconId: 60704, tooltip: "Attack 4",
        "command": "/enemysign attack4 <t>",
      },
      {
        iconId: 60705, tooltip: "Attack 5",
        "command": "/enemysign attack5 <t>",
      },
      {
        iconId: 60706, tooltip: "Bind 1",
        "command": "/enemysign bind1 <t>",
      },
      {
        iconId: 60707, tooltip: "Bind 2",
        "command": "/enemysign bind2 <t>",
      },
      {
        iconId: 60708, tooltip: "Bind 3",
        "command": "/enemysign bind3 <t>",
      },
      {
        iconId: 60709, tooltip: "Ignore 1",
        "command": "/enemysign ignore1 <t>",
      },
      {
        iconId: 60710, tooltip: "Ignore 2",
        "command": "/enemysign ignore2 <t>",
      },
      {
        iconId: 60712, tooltip: "Circle",
        "command": "/enemysign circle <t>",
      },
      {
        iconId: 60713, tooltip: "Cross",
        "command": "/enemysign cross <t>",
      },
      {
        iconId: 60711, tooltip: "Square",
        "command": "/enemysign square <t>",
      },
      {
        iconId: 60714, tooltip: "Triangle",
        "command": "/enemysign triangle <t>",
      },
/*       {
        iconId: 9,
        tooltip: 'Signs',
        "command": "/mk",
      }, */
    ].reverse()
  },
  {
    iconId: 61105,
    tooltip: "Misc",
    scale: 1.5,
    children: [
      {
        iconId: 111,
        scale: 1.5,
        tooltip: 'Teleport',
        "command": "/teleport",
      },
      {
        iconId: 112,
        scale: 1.5,
        tooltip: 'Return',
        "command": "/return",
      },
    ]
  }
]

// JQ query
// .. | {name: .n?, command: .c?, columns: .cC?}

const newBarJson = qolExportFromSchema(barSchema);

export default class CatEditorComponent extends Component {
  newBarJson = newBarJson
  @tracked
  userInput =
    'H4sIAAAAAAAEAO1YW2+bMBT+K8je21iKDTQETZMSuq3b6GVJqz5MfXCIm2RpIALSKKr633dIgVyKHQqZ1Ic+RPE5HH8+l88Hm0f0IV7OOLIRRyrqU2Q/5hqQVOTDgFKm/A5cpcNC0EQusv+sraLMyrZHx4RYFOOv0yDmEahjZBMVefDwiCe6+3EUSxCOZsHYTwy8TWF8AdZaQ1PhdwtiF9mJhLzeDB5YqnH7pBaBDZjv8QwsE6qC9TmPJj5fReXtKqqCeiPOwwwwE6qCzdgy5NGMe3Hu47aqspf3bJY7+TyuCsXnIZ+wDCyXKod8z5YDzgZ5vGu5crCBH40HG1VZy7WqHPhbdV6JtQD/zqezLchUUQt0wR74FmiqeDsFWrUWxX3uIy8aSwnQW4nVDbQramXmBpjD+LyD7DiccxiePo8KHYPuR0yMfwb9deOTdUpKSAvjS7e93SaHnIURjxVvxPwhV8iefkuJDv32pPsLFc+3DpIUPfl3kuRks8AsyU0PdA3zVUkCl6mB8c3pmTRwfW/g1MK455wKAqfVKZbmVce43bsSwBtvMq/Av44rzytp7U9sExJ7di6I3KydWA3j8x8i+OO68BTq1umeCOCbtb0H7vbaZwL4Vm3446SE1wJ4or1B2lkabESneymnXXMf7SwN2mGnJ8osqcs7iwDv2l0hPqmNTzD+Lva/bkOyCDR69+pGhK/Xxtel+CU7ngQfdk7bdUT4Jd9UEnzofs61K8Iv2VhevXXSU4Js65TB7F3k08rCClLRBJ53HeWj4gRzPx4EC3/nJhbCAWwJpztvItmTurY+Aacwil6y/RQ5Rs2XeLTGnqYF/tEa/pEC/+r0HFLgX9n2LSisCe+GblI7xUmL97KcB2J4br1JwW+J1Su4uGDLKQsnu98BvFGgjMayrwDpRCW/KG4qaka4GZnMeT4cLn2+KPB9/UQYAPf5dBmNh77C4ph5E6J8jr/k9xXBw8p36h08KluMHngxXbaYfuDFDNlixoEXM2WLmeUXK0vGkpsqZd+A3wmpeXe3eGfnOzv/NztBzcBURX14a1D455nJ6kbRIFbTammGZaqftAbVqGbRpqnDrAjMkwWi9TnH72SURw/Jy71BGnrDQE//ADR6GuKeFgAA';

  get qolStruct() {
    let b = base64DecToArr(this.userInput);
    try {
      let decompressedBin = new Uint8Array(gunzip(b));
      let decompressedStr = textDecoder.decode(decompressedBin);
      let json = JSON.parse(decompressedStr);
      console.log(json);
      return json;
    } catch (e) {
      console.error(e);
    }
    return 'error';
  }

  get qolStructPrettyPrint() {
    return JSON.stringify(this.qolStruct, null, 2);
  }

  get newBarPrettyPrint() {
    return JSON.stringify(this.newBarJson, null, 2);
  }

  get newExportData() {
    let zipped = gzip(JSON.stringify(this.qolStruct));
    let b64 = base64EncArr(zipped);
    return b64;
  }
  get newBarExportData() {
    let zipped = gzip(JSON.stringify(this.newBarJson));
    let b64 = base64EncArr(zipped);
    return b64;
  }
}
