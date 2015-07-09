// import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-spinner';

export default BaseComponent.extend({
  primaryClassName: 'spinner',
  classNameBindings: [
    'isActive:is-active',
    'isSingleColor:mdl-spinner--single-color'
  ],
  isActive: true,
  isSingleColor: false,
  layout
});
