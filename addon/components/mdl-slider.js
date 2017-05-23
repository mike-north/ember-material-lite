import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-slider';

var _value = 0;

export default BaseComponent.extend({
  tagName: 'input',
  type: 'range',
  min: 0,
  max: 100,
  value: Ember.computed({
    // getter
    get() {
      return _value;
    },
    // setter
    set(key, value) {
      _value = value;
      if (this.get('_mdlComponent')) { this.get('_mdlComponent').change(value); }
      return _value;
    }
  }),
  attributeBindings: ['type', 'min', 'max', 'value'],
  primaryClassName: 'slider',
  layout,
  didInsertElement() {
    this._super(...arguments);
    let mdlslider = new window.MaterialSlider(this.get('element'));
    this.set('_mdlComponent', mdlslider);
    mdlslider.change(this.get('value'));
  }
});
