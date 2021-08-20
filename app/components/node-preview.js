import Component from '@glimmer/component';

export default class NodePreviewComponent extends Component {
  get nodeNameHasImage() {
    return this.args.nodeData.n.startsWith('::');
  }

  get nodeNameImageId() {
    if (this.nodeNameHasImage) {
      let iconId = (
        this.args.nodeData.n.match(/\d+\.\d+|\d+\b|\d+(?=\w)/g) || []
      )
        .map(Number)
        .shift();
      let iconIdPad = iconId.toString().padStart(6, '0');
      let iconBand = iconId - Math.floor(iconId % 1000);
      let iconBandPad = iconBand.toString().padStart(6, '0');
      // https://xivapi.com/docs/Icons
      return `${iconBandPad}/${iconIdPad}`;
    } else {
      return false;
    }
  }
}
