import {
  defaultBarRoot,
  defaultCategory,
  defaultShortcut,
} from 'qol-bar-editor/lib/bar-node-defaults';

// JQ query
// .. | {name: .n?, command: .c?, columns: .cC?}

const clone = (value) => JSON.parse(JSON.stringify(value));
const withDefault = (val, defaultValue) =>
  val === undefined ? defaultValue : val;

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
    let obj;
    if (node.children) {
      obj = clone(baseCategory);
      obj.sL = _schemaToQolBarConfig(node.children, baseCategory, baseShortcut);
    } else {
      obj = clone(baseShortcut);
    }
    if (node.iconId || node.tooltip) {
      node.name = '';
      if (node.iconId) {
        node.name += `::h${node.iconId}`;
      }
      if (node.tooltip) {
        node.name += `##${node.tooltip}`;
      }
    }
    obj.n = withDefault(node.name, 'DEFAULT');
    obj.c = withDefault(node.command, '/echo DEFAULT COMMAND');
    obj.cC = withDefault(node.columns, 1);
    obj.cS = withDefault(node.scale, 1);
    obj.cF = withDefault(node.fontScale, 1);
    obj.nB = withDefault(node.noBackground, true);
    obj.bW = withDefault(node.buttonWidth, 30);
    obj.cW = withDefault(node.categoryWidth, 30);
    obj.cH = withDefault(node.openOnHover, true);
    obj.cSO = withDefault(node.stayOpenOnSelect, false);
    return obj;
  });
};
