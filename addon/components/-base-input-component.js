import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';

const {
  computed,
  isPresent,
  observer,
  run
} = Ember;

var _value = "";

export default BaseComponent.extend({
  primaryClassName: 'textfield',
  type: 'text',
  disabled: false,
  isLabelFloating: true,
  errorMessage: null,
  classNameBindings: [
    'isLabelFloating:mdl-textfield--floating-label'
  ],
  // This should never change, so we deliberately
  //   declare no dependent property keys
  _inputId: computed(function() {
    return `${this.get('elementId')}-input`;
  }),
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
  beforeMdlInit() {},
  didInsertElement() {
    this._super(...arguments);
    this.beforeMdlInit();
    let mdlTextfield = new window.MaterialTextfield(this.get('element'));
    this.set('_mdlComponent', mdlTextfield);
  },
  _checkValidity: observer('errorMessage', function() {
    run.scheduleOnce('afterRender', this, this._setValidity);
  }),
  _setValidity() {
    if (this.isDestroyed) {
      return;
    }

    let mdlComponent = this.get('_mdlComponent');
    let errorMessage = this.get('errorMessage');

    if (isPresent(errorMessage)) {
      mdlComponent.input_.setCustomValidity(errorMessage.toString());
    } else {
      mdlComponent.input_.setCustomValidity('');
    }
  }
});
