import Component from '@glimmer/component';
import { zip as gzip, unzip as gunzip } from 'gzip-js';
import { tracked } from '@glimmer/tracking';
import { base64DecToArr, base64EncArr } from 'qol-bar-editor/lib/base64';

const textDecoder = new TextDecoder();

export default class CatEditorComponent extends Component {
  @tracked
  userInput =
    'H4sIAAAAAAAEAOVabXOaQBD+K8zRbzGGO1CRb0rSJi15qSaTmXYyHcQzWBEcwKROJv+9y6tKBHWknXD5wMy6x+3tPre3L3gv6JO/mFGkoO+O1tXd+sV05rj+2H48OvsTUBf2yKlx0SCqoQFGij23LKAIUl6ys+FRR48r79swRogeMLiIM0GKUEOehpSfb6b3zbezFcVsYiwTnj+bOj71gO0jBdeQAYMnNOBZY89PJU9ukDLSLY/us8jJzBnbfiRaiEUnrI1iIwym0dsWUiTSltrNFmk3gt+dkD/+AXrWA+Ia9BCAgucBfvZgOOAb9/CCFBD961S6oUbW9WcwSa5JDwEdCzI+J8RVdznhPCV/jUHya203k4e6bdB1kxMWqyYPKPUmNk2cKDF7lc2q6YZJqbtudsJi1eSZvnCpN6OGn9nv9QFWzTcsfZbZ8IjDqsF07tKJvm5yymPV6JmlL4ZUH2Y8fMll1XDDsb3x8E1MW3KZNTwI2469IZaHTKbN/j2fZmPaCptp05/1J7rB9JjNqukfNbyFvQ6nRY3Naj7b1u+8Z9MfylGMyAWKSUWK+e481iui9tkR6ENxg+e/OoP1FvSwxjPobgnGbZ6/0Trrre0j1V2P+pxh6vYj5XAZC4nQRp/2vq37VGYh+eO6lrhJL5IoBlNSxRoluxbsDZF4/v78stAJxDKcgMg831fPC52AVNEJ9kFbFHm+078tBEGqIggsnASIs12t+CTgdilHoQVH4fKq0AsaVfSCvY6CwPNXF8UgNFkHgUA86PZOC0FosQ6CCCmo37ksBCH33DEDQjOIPneFIGChiihUPzXIAtQuau+mODXkntM9UoMsQE3e7RefBcx6bpAx5IZObwsKua0JMyhgnv+yzRdYL5llDM2jdntfjEJuh8IMCuIOKFSyc9gLBagUOppajEIlvyTshQI0KuqdVoxCJUvn/1EqrH6q27FUKFmteJG874dl1y8tSKY9lTviVGdu+0Pn2c7cZnGpPlwYJjUmh1UwopD9VyxejxMrWbjuhjBp5FlNGK7TSO5eE4b3GufuNcs1Oc7d62o2pDtHzgb05L0gOHJqHB1XUNgeNd8zBv8w027SK85pQkgcmtOe9cVUdyfZO5mG6XDm+MAbmbFsLnOhZ5X9Qfe6HMUyZZWZDg6RAiWaHurzFNKmnw4OYH0CAzTlhB996gRLUkPEUrN2LNSlpiDhJgap1nJJJxTowfRAG7cTqzVKFPWW1Ze9dEukHONXGEyvHXskoZ6C5FfHdbEuode/T5VAc8gsAAA=';

  get qolStruct() {
    let b = base64DecToArr(this.userInput);
    try {
      let decompressedBin = new Uint8Array(gunzip(b));
      let decompressedStr = textDecoder.decode(decompressedBin);
      let json = JSON.parse(decompressedStr);
      console.log(json);
      return json;
    } catch (e) {
      console.error(e);
    }
    return 'error';
  }

  get qolStructPrettyPrint() {
    return JSON.stringify(this.qolStruct, null, 2);
  }

  get newExportData() {
    let zipped = gzip(JSON.stringify(this.qolStruct));
    let b64 = base64EncArr(zipped);
    return b64;
  }
}
