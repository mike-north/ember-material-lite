import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-textfield';
import computed from 'ember-new-computed';

export default BaseComponent.extend({
  primaryClassName: 'textfield',
  layout,
  type: 'text',
  pattern: null,
  disabled: false,
  errorMessage: null,
  expandableIcon: null,
  isLabelFloating: true,
  isExpandable: false,
  classNameBindings: [
    'isLabelFloating:mdl-textfield--floating-label',
    'isExpandable:mdl-textfield--expandable'
  ],
  // This should never change, so we deliberately
  //   declare no dependent property keys
  _inputId: computed({
    get() {
      return `${this.get('elementId')}-input`;
    }
  }),
  didInsertElement() {
    this._super(...arguments);
    this.$('label.mdl-button').attr('for', this.get('_inputId'));
    let mdlTextfield = new window.MaterialTextfield(this.get('element'));
    this.set('_mdlComponent', mdlTextfield);
  }
});
