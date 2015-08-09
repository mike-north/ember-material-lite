import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import { componentRippleTest } from './ripple-helpers';
moduleForComponent('mdl-button', 'Unit | Component | mdl button', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('Component ripple is installed properly', componentRippleTest, { text: 'Hello' });

test('Disable works', function(assert) {
  const component = this.subject({ text: 'Hello' });
  assert.equal(component._state, 'preRender');
  // Renders the component to the page
  this.render();

  assert.ok(!component.$().attr('disabled'), 'Button is not initially disabled');
  Ember.run(() => {
    component.set('disabled', true);
  });
  assert.ok(component.$().attr('disabled'), 'Button is now disabled');
});
