import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { zip as gzip } from 'gzip-js';

import { base64EncArr } from 'qol-bar-editor/lib/base64';
import { exampleSchema } from 'qol-bar-editor/lib/example-input';
import { schemaToQolBarConfig } from 'qol-bar-editor/lib/bar-utils';

export default class FromJsonComponent extends Component {
  @tracked jsonInputIsInvalid = false;
  @tracked jsonInputParseErrorString = null;
  @tracked newBarJson = schemaToQolBarConfig(exampleSchema);

  initialNewBarPrettyPrint = JSON.stringify(this.newBarJson, null, 2);

  get newBarExportData() {
    let zipped = gzip(JSON.stringify(this.newBarJson));
    let b64 = base64EncArr(zipped);
    return b64;
  }

  @action
  onUpdateJson(newValue) {
    try {
      this.newBarJson = JSON.parse(newValue);
      this.jsonInputIsInvalid = false;
      this.jsonInputParseErrorString = null;
    } catch (e) {
      console.info('JSON config parse error:', e);
      this.jsonInputIsInvalid = true;
      this.jsonInputParseErrorString = e;
    }
  }
}
