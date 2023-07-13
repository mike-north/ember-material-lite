import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | mdl tabs', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      {{#mdl-tabs active="Fruit"}}
        {{#mdl-tab title="Fruit"}}
          template block text
        {{/mdl-tab}}
      {{/mdl-tabs}}
    `);

    assert.dom(this.element).hasText('Fruit template block text');
  });

  test('Switch active tab', async function (assert) {
    await render(hbs`
      {{#mdl-tabs active="Fruit"}}
        {{#mdl-tab title="Fruit"}}
          This is the fruit tab
        {{/mdl-tab}}
        {{#mdl-tab title="Vegetables"}}
          This is the vegetables tab
        {{/mdl-tab}}
      {{/mdl-tabs}}
    `);

    assert.dom(this.element).hasText('Fruit Vegetables This is the fruit tab');

    const [, secondTab] = this.element.querySelectorAll('.mdl-tabs__tab');
    await click(secondTab);

    assert
      .dom(this.element)
      .hasText('Fruit Vegetables This is the vegetables tab');
  });
});
