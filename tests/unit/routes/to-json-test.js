import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | to-json', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:to-json');
    assert.ok(route);
  });
});
