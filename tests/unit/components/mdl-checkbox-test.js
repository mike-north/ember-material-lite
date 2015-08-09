import { moduleForComponent, test } from 'ember-qunit';
import { componentDisabledTest } from './-general-helpers';

moduleForComponent('mdl-checkbox', 'Unit | Component | mdl checkbox', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('Component disables properly', componentDisabledTest('input'));
