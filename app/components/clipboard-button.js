import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

const notifyConfig = {
  radius: true,
};

export default class ClipboardButtonComponent extends Component {
  @service notify;

  @action
  onClipboardSuccess() {
    this.notify.success('Copied to clipboard', notifyConfig);
  }

  @action
  onClipboardError() {
    this.notify.error('Error copying to clipboard', notifyConfig);
  }
}
