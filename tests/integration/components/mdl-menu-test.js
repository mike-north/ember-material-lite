import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mdl menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{mdl-menu}}`);

    assert.equal(this.$().text().trim(), 'more_vert');

    // Template block usage:
    await render(hbs`
      {{#mdl-menu}}
        template block text
      {{/mdl-menu}}
    `);

    assert.equal(this.$().text().trim().replace(/\s/g, ''), 'more_verttemplateblocktext');
  });
});
