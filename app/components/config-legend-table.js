import Component from '@glimmer/component';

export default class ConfigLegendTableComponent extends Component {
  get configProperties() {
    return this.args.config.map((p) => {
      p.defaultStringified = JSON.stringify(p.default);
      return p;
    });
  }
}
