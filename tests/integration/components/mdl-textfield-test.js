import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-textfield', 'Integration | Component | mdl textfield', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-textfield}}`);

  assert.equal(this.$('input').length, 1, 'Rendered an input');
});

test('value bindings', function(assert) {
  assert.expect(2);

  this.set('value', 'hello');

  this.render(hbs`{{mdl-textfield value=value}}`);

  assert.equal(this.$('input').val(), 'hello');

  this.$('input').val('bye').change();
  assert.equal(this.get('value'), 'bye');
});

test('html validations', function(assert) {
  assert.expect(2);

  this.render(
    hbs`{{mdl-textfield pattern="[A-Z]{2}" errorMessage="Please use two upper case letters"}}`
  );

  this.$('input').val('ny').change();

  assert.equal(this.$().text().trim(), 'Please use two upper case letters');
  assert.ok(this.$('.mdl-textfield__error').is(':visible'), 'Errors are visible');
});

test('custom errorMessage', function(assert) {
  assert.expect(5);

  this.render(
    hbs`{{mdl-textfield errorMessage=message}}`
  );

  assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');

  this.set('message', 'That input is not acceptable');

  assert.equal(this.$().text().trim(), 'That input is not acceptable');
  assert.ok(this.$('.mdl-textfield__error').is(':visible'), 'Errors are visible');

  this.set('message', '');
  assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');

  this.set('message', []);
  assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');
});
