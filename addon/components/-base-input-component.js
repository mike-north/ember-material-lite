import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';

const { computed } = Ember;

export default BaseComponent.extend({
  primaryClassName: 'textfield',
  type: 'text',
  disabled: false,
  isLabelFloating: true,
  classNameBindings: [
    'isLabelFloating:mdl-textfield--floating-label'
  ],
  // This should never change, so we deliberately
  //   declare no dependent property keys
  _inputId: computed(function() {
    return `${this.get('elementId')}-input`;
  }),
  beforeMdlInit() {},
  didInsertElement() {
    this._super(...arguments);
    this.beforeMdlInit();
    let mdlTextfield = new window.MaterialTextfield(this.get('element'));
    this.set('_mdlComponent', mdlTextfield);
  }
});
