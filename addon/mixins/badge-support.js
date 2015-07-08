import Ember from 'ember';

export default Ember.Mixin.create({
  badge: null,
  attributeBindings: ['badge:data-badge'],
  classNameBindings: ['badge:mdl-badge']
});
