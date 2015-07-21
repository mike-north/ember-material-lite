import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-textfield';
import computed from 'ember-new-computed';

export default BaseComponent.extend({
  primaryClassName: 'textfield',
  layout,
  type: 'text',
  pattern: null,
  errorMessage: null,
  isLabelFloating: true,
  isExpandable: false,
  classNameBindings: [
    'isLabelFloating:mdl-textfield--floating-label',
    'isExpandable:mdl-textfield--expandable'
  ],
  _inputId: computed('elementId', {
    get() {
      return `${this.get('elementId')}-input`;
    }
  }),
  didInsertElement() {
    this._super(...arguments);
    let mdlTextfield = new window.MaterialTextfield(this.get('element'));
    this.set('_mdlComponent', mdlTextfield);
  }
});
