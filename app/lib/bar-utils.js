import {
  defaultBarRoot,
  defaultCategory,
  defaultShortcut,
} from 'qol-bar-utils/lib/config-defaults';

// JQ query
// .. | {name: .n?, command: .c?, columns: .cC?}

const clone = (value) => JSON.parse(JSON.stringify(value));

// prettier-ignore
const barConfigProperties = [
  {key: 'n', verbose: 'name', default: '' },
  {key: 'k', verbose: 'hotkey', default: 0 },
  {key: 'sL', verbose: 'shortcutList', default: [] },
  {key: 'h', verbose: 'hidden', default: false },
  {key: 'd', verbose: 'dockSide', default: 2 },
  {key: 'a', verbose: 'barAlign', default: 1 },
  {key: 'v', verbose: 'visibility', default: 2 },
  {key: 'ht', verbose: 'hint', default: false },
  {key: 'bW', verbose: 'buttonWidth', default: 100 },
  {key: 'e', verbose: 'editing', default: false },
  {key: 'p', verbose: 'position', default: [0, 0] },
  {key: 'l', verbose: 'lockedPosition', default: false },
  {key: 'co', verbose: 'columns', default: 0 },
  {key: 's', verbose: 'scale', default: 1.0 },
  {key: 'rA', verbose: 'revealAreaScale', default: 1.0 },
  {key: 'fS', verbose: 'fontScale', default: 1.0 },
  {key: 'sp', verbose: 'spacing', default: [8, 4] },
  {key: 'nB', verbose: 'noBackground', default: false },
  {key: 'c', verbose: 'conditionSet', default: -1 },
]

const barConfigVerboseKeyMapping = barConfigProperties.reduce(
  (acc, i) => ({ ...acc, [i.verbose]: i.key }),
  {}
);

// prettier-ignore
const shortcutConfigProperties = [
  {key: 'n', verbose: 'name', default: '' },
  {key: 't', verbose: 'shortcutType', default: 0 },
  {key: 'c', verbose: 'command', default: '' },
  {key: 'k', verbose: 'hotkey', default: 0 },
  {key: 'kP', verbose: 'keyPassthrough', default: false },
  {key: 'sL', verbose: 'subList', default: null },
  {key: 'm', verbose: 'shortcutMode', default: 0 },
  {key: 'cl', verbose: 'color', default: 0xFFFFFFFF },
  // {key: 'cl2', verbose: 'colorBg', default: 0xE6494949 },
  {key: 'clA', verbose: 'colorAnimation', default: 0 },
  {key: 'iZ', verbose: 'iconZoom', default: 1.0 },
  {key: 'iO', verbose: 'iconOffset', default: [0, 0] },
  {key: 'iR', verbose: 'iconRotation', default: 0 },
  {key: 'cW', verbose: 'categoryWidth', default: 140 },
  {key: 'cSO', verbose: 'categoryStaysOpen', default: false },
  {key: 'cC', verbose: 'categoryColumns', default: 1 },
  {key: 'cSp', verbose: 'categorySpacing', default: [8, 4] },
  {key: 'cS', verbose: 'categoryScale', default: 1.0 },
  {key: 'cF', verbose: 'categoryFontScale', default: 1.0 },
  {key: 'cNB', verbose: 'categoryNoBackground', default: false },
  {key: 'cH', verbose: 'categoryOnHover', default: false },
];

const shortcutConfigVerboseKeyMapping = shortcutConfigProperties.reduce(
  (acc, i) => ({ ...acc, [i.verbose]: i.key }),
  {}
);

const derivedProperties = ['iconId', 'iconArgument', 'tooltip'];

export const schemaToQolBarConfig = (
  schema,
  baseBarRoot = defaultBarRoot,
  baseCategory = defaultCategory,
  baseShortcut = defaultShortcut
) => {
  const base = clone(baseBarRoot);
  base.b2.sL = _schemaToQolBarConfig(schema, baseCategory, baseShortcut);
  return base;
};

const _schemaToQolBarConfig = (schema, baseCategory, baseShortcut) => {
  return schema.map((node) => {
    let baseNode = clone(node.subList ? baseCategory : baseShortcut);
    if (node.subList) {
      baseNode.sL = _schemaToQolBarConfig(
        node.subList,
        baseCategory,
        baseShortcut
      );
    }

    if (node.iconId || node.tooltip) {
      if (node.iconId) {
        baseNode.n = '';
        baseNode.n += `::${node.iconArgument || baseNode.iconArgument}${
          node.iconId
        }`;
      }
      if (node.tooltip) {
        baseNode.n += `##${node.tooltip}`;
      }
    } else {
      baseNode.n = node.name;
    }

    shortcutConfigProperties.forEach((p) => {
      if (
        p.verbose !== 'subList' &&
        node[p.verbose] !== undefined &&
        node[p.verbose] !== baseNode[p.key]
      ) {
        baseNode[p.key] = clone(node[p.verbose]);
      }
      // omit default config values
      if (baseNode[p.key] === p.default) {
        delete baseNode[p.key];
      }
    });

    // omit derived properties like tooltip and iconId that the plugin doesn't understand
    derivedProperties.forEach((p) => {
      delete baseNode[p];
    });

    // console.log(baseNode);
    return baseNode;
  });
};
