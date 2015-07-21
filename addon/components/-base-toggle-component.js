import BaseToplevelComponent from './-base-toplevel-component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-checkbox';

import computed from 'ember-new-computed';

export default BaseToplevelComponent.extend(RippleSupport, {
  tagName: 'label',
  layout,
  value: false,
  attributeBindings: ['_inputId:for'],
  _inputId: computed('elementId', {
    get() {
      return `${this.get('elementId')}-input`;
    }
  })
});
