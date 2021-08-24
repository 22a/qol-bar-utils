import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | output-badge', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<OutputBadge />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <OutputBadge>
        template block text
      </OutputBadge>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
