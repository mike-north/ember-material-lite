import { moduleForComponent, test } from 'ember-qunit';
import { componentDisabledTest } from './-general-helpers';

moduleForComponent('mdl-radio', 'Unit | Component | mdl radio', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('Component disables properly', componentDisabledTest('input'));

test('checked property is set', function(assert) {
  assert.expect(1);

  // Creates the component instance
  this.subject({ checked: true });

  // Renders the component to the page
  this.render();

  // Test the checked state
  assert.equal(this.$('input').is(':checked'), true);
});
