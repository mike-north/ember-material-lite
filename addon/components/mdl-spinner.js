import Ember from 'ember';
import layout from '../templates/components/mdl-spinner';

export default Ember.Component.extend({
  classNames: ['mdl-spinner', 'mdl-js-spinner'],
  classNameBindings: [
    'isActive:is-active',
    'isSingleColor:mdl-spinner--single-color'
  ],
  isActive: true,
  isSingleColor: false,
  layout
});
