import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ConsoleLogButtonComponent extends Component {
  @action
  log() {
    console.log(this.args.data);
  }
}
