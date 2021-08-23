import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { unzip as gunzip } from 'gzip-js';

import { base64DecToArr } from 'qol-bar-utils/lib/base64';
import { exampleQolBarExportString } from 'qol-bar-utils/lib/example-input';

const textDecoder = new TextDecoder();

export default class ToJsonComponent extends Component {
  @tracked userInput = exampleQolBarExportString;

  get parsedQolBar() {
    let zippedJson = base64DecToArr(this.userInput.trim());
    try {
      let unzippedBinary = new Uint8Array(gunzip(zippedJson));
      let qolBaeJsonString = textDecoder.decode(unzippedBinary);
      return JSON.parse(qolBaeJsonString);
    } catch (e) {
      console.info('Export string extraction error:', e);
      return `ERROR: The provided export string could not be decoded:\n${e}`;
    }
  }

  get parsedQolBarJsonPrettyPrint() {
    return JSON.stringify(this.parsedQolBar, null, 2);
  }

  noop() {}
}
