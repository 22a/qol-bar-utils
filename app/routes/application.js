import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  beforeModel() {
    this.replaceWith('from-schema');
  }
}
