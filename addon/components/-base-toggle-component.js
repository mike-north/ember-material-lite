import Ember from 'ember';
import BaseToplevelComponent from './-base-toplevel-component';
import RippleSupport from '../mixins/ripple-support';
import ClickActionSupport from '../mixins/click-action-support';
import layout from '../templates/components/mdl-checkbox';
import _computed from 'ember-new-computed';

const { deprecate, computed } = Ember;

export default BaseToplevelComponent.extend(RippleSupport, ClickActionSupport, {
  tagName: 'label',
  layout,
  value: false,
  label: _computed('text', {
    get() {
      deprecate(`The 'label' property has been deprecated. Please use 'text' instead`, false);
      return this.get('text');
    },
    set(key, val) {
      deprecate(`The 'label' property has been deprecated. Please use 'text' instead`, false);
      this.set('text');
      return val;
    }
  }),
  text: '',
  attributeBindings: ['_inputId:for'],
  _inputId: computed('elementId', function() {
    return `${this.get('elementId')}-input`;
  })
});
