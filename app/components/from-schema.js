import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { zip as gzip } from 'gzip-js';

import { base64EncArr } from 'qol-bar-utils/lib/base64';
import { schema as exampleSchema } from 'qol-bar-utils/lib/personal-schema';
import { schemaToQolBarConfig } from 'qol-bar-utils/lib/bar-utils';
import {
  defaultBarRoot,
  defaultCategory,
  defaultShortcut,
} from 'qol-bar-utils/lib/config-defaults';

export default class FromSchemaComponent extends Component {
  @tracked showBarRootInput = false;
  @tracked showCategoryInput = false;
  @tracked showShortcutInput = false;
  @tracked showSchemaInput = false;
  @tracked showGeneratedJSON = false;
  @tracked showNodePreview = true;

  initialBarRootPrettyPrint = JSON.stringify(defaultBarRoot, null, 2);
  @tracked barRoot = defaultBarRoot;
  @tracked barRootInputIsInvalid = false;
  @tracked barRootInputParseErrorString = null;

  initialCategoryPrettyPrint = JSON.stringify(defaultCategory, null, 2);
  @tracked category = defaultCategory;
  @tracked categoryInputIsInvalid = false;
  @tracked categoryInputParseErrorString = null;

  initialShortcutPrettyPrint = JSON.stringify(defaultShortcut, null, 2);
  @tracked shortcut = defaultShortcut;
  @tracked shortcutInputIsInvalid = false;
  @tracked shortcutInputParseErrorString = null;

  initialSchemaPrettyPrint = JSON.stringify(exampleSchema, null, 2);
  @tracked schema = exampleSchema;
  @tracked schemaInputIsInvalid = false;
  @tracked schemaInputParseErrorString = null;

  get allInputsValid() {
    return !(
      this.barRootInputIsInvalid ||
      this.categoryInputIsInvalid ||
      this.shortcutInputIsInvalid ||
      this.schemaInputIsInvalid
    );
  }

  get newBar() {
    return schemaToQolBarConfig(
      this.schema,
      this.barRoot,
      this.category,
      this.shortcut
    );
  }

  get newBarJsonPrettyPrint() {
    return JSON.stringify(this.newBar, null, 2);
  }

  get newBarExportData() {
    let zipped = gzip(JSON.stringify(this.newBar));
    let b64 = base64EncArr(zipped);
    return b64;
  }

  @action
  onBarRootInputUpdate(inputValue) {
    try {
      this.barRoot = JSON.parse(inputValue);
      this.barRootInputIsInvalid = false;
      this.barRootInputParseErrorString = null;
    } catch (e) {
      console.info('Bar root JSON config parse error:', e);
      this.barRootInputIsInvalid = true;
      this.barRootInputParseErrorString = e;
    }
  }

  @action
  onCategoryInputUpdate(inputValue) {
    try {
      this.category = JSON.parse(inputValue);
      this.categoryInputIsInvalid = false;
      this.categoryInputParseErrorString = null;
    } catch (e) {
      console.info('Default Category JSON config parse error:', e);
      this.categoryInputIsInvalid = true;
      this.categoryInputParseErrorString = e;
    }
  }

  @action
  onShortcutInputUpdate(inputValue) {
    try {
      this.shortcut = JSON.parse(inputValue);
      this.shortcutInputIsInvalid = false;
      this.shortcutInputParseErrorString = null;
    } catch (e) {
      console.info('Default Shortcut JSON config parse error:', e);
      this.shortcutInputIsInvalid = true;
      this.shortcutInputParseErrorString = e;
    }
  }

  @action
  onSchemaInputUpdate(inputValue) {
    try {
      this.schema = JSON.parse(inputValue);
      this.schemaInputIsInvalid = false;
      this.schemaInputParseErrorString = null;
    } catch (e) {
      console.info('Schema JSON config parse error:', e);
      this.schemaInputIsInvalid = true;
      this.schemaInputParseErrorString = e;
    }
  }

  noop() {}
}
