import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mdl textarea', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{mdl-textarea}}`);

    assert.equal(this.$('textarea').length, 1, 'Rendered a textarea');
  });

  test('value bindings', async function(assert) {
    assert.expect(2);

    this.set('value', 'hello');

    await render(hbs`{{mdl-textarea value=value}}`);

    assert.equal(this.$('textarea').val(), 'hello');

    this.$('textarea').val('bye').change();
    assert.equal(this.get('value'), 'bye');
  });

  test('html validations', async function(assert) {
    assert.expect(2);

    await render(hbs`{{mdl-textarea pattern="[A-Z]{2}" errorMessage="Please use two upper case letters"}}`);

    this.$('textarea').val('ny').change();

    assert.equal(this.$().text().trim(), 'Please use two upper case letters');
    assert.ok(this.$('.mdl-textfield__error').is(':visible'), 'Errors are visible');
  });

  test('custom errorMessage', async function(assert) {
    assert.expect(5);

    await render(hbs`{{mdl-textarea errorMessage=message}}`);

    assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');

    this.set('message', 'That text is not acceptable');

    assert.equal(this.$().text().trim(), 'That text is not acceptable');
    assert.ok(this.$('.mdl-textfield__error').is(':visible'), 'Errors are visible');

    this.set('message', '');
    assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');

    this.set('message', []);
    assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');
  });
});
