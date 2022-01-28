import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, triggerEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mdl tooltip', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      {{#mdl-tooltip}}Test{{/mdl-tooltip}}
    `);

    assert.dom(this.element).hasText('Test');
  });

  test('tooltip by id works', async function (assert) {
    await render(hbs`
      <p id="trigger">Mike's span</p>
      {{#mdl-tooltip id="tooltip" for="trigger"}}Test{{/mdl-tooltip}}
    `);

    assert.dom('#tooltip').doesNotHaveClass('is-active');

    await triggerEvent('#trigger', 'mouseenter');
    assert.dom('#tooltip').hasClass('is-active');

    await triggerEvent('#trigger', 'mouseleave');
    assert.dom('#tooltip').doesNotHaveClass('is-active');
  });

  test('tooltip by className works', async function (assert) {
    await render(hbs`
      {{input id="alala" class="trigger"}}
      {{#mdl-tooltip id="tooltip" for=".trigger"}}
        This is a tooltip on a button
      {{/mdl-tooltip}}
    `);

    assert.dom('#tooltip').doesNotHaveClass('is-active');

    await triggerEvent('.trigger', 'mouseenter');
    assert.dom('#tooltip').hasClass('is-active');

    await triggerEvent('.trigger', 'mouseleave');
    assert.dom('#tooltip').doesNotHaveClass('is-active');
  });
});
