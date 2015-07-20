// import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-spinner';

export default BaseComponent.extend({
  primaryClassName: 'spinner',
  classNameBindings: [
    'isActive:is-active',
    'isSingleColor:mdl-spinner--single-color'
  ],
  _mdlComponent: null,
  isActive: true,
  isSingleColor: false,
  layout,
  didInsertElement() {
    this._super(...arguments);
    let mdlspinner = new window.MaterialSpinner(this.get('element'));
    this.set('_mdlComponent', mdlspinner);
  }
});
