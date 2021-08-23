import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  beforeModel() {
    this.replaceWith('to-json');
  }
}
