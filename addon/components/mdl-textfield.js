import Ember from 'ember';
import BaseComponent from './-base-input-component';
import layout from '../templates/components/mdl-textfield';

const {
  isPresent,
  observer,
  run
} = Ember;

export default BaseComponent.extend({
  pattern: null,
  errorMessage: null,
  isExpandable: false,
  expandableIcon: null,
  layout,
  classNameBindings: [
    'isExpandable:mdl-textfield--expandable'
  ],
  beforeMdlInit() {
    this.$('label.mdl-button').attr('for', this.get('_inputId'));
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
