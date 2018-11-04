import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mdl button', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  test('it renders with the correct text', async function(assert) {

    await render(hbs`{{mdl-button}}`);
    assert.equal(this.$().text().trim(), '');

    await render(hbs`{{mdl-button text='Mike'}}`);
    assert.equal(this.$().text().trim(), 'Mike');

    // Template block usage:
    await render(hbs`
      {{#mdl-button}}
        Hello
      {{/mdl-button}}
    `);

    assert.equal(this.$().text().trim(), 'Hello');
  });

  test('fires action "action" on click by default', async function(assert) {
    assert.expect(1);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.actions.buttonClicked = (val) => {
      assert.ok(val.element.className.indexOf('this-is-my-button') >= 0, 'Button component is passed as argument to action');
    };

    await render(hbs`
      {{#mdl-button action='buttonClicked' class='this-is-my-button'}}
        Hello
      {{/mdl-button}}
    `);

    this.$('.mdl-button').click();
  });

  test('does not fire action when disabled', async function(assert) {
    assert.expect(2);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    let clickCount = 0;
    this.actions.buttonClicked = () => {
      clickCount++;
    };

    this.set('buttonDisabled', false);

    await render(hbs`
      {{#mdl-button action='buttonClicked' class='this-is-my-button' disabled=buttonDisabled}}
        Hello
      {{/mdl-button}}
    `);

    this.$('.mdl-button').click();
    assert.equal(clickCount, 1, 'One click action fired');

    this.set('buttonDisabled', true);
    this.$('.mdl-button').click();

    assert.equal(clickCount, 1, 'Still one click');
  });
});
