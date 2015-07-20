import Ember from 'ember';

export default Ember.Mixin.create({
  badge: null,
  hasBadgeBackground: true,
  attributeBindings: ['badge:data-badge'],
  classNameBindings: ['badge:mdl-badge', 'hasBadgeBackground::mdl-badge--no-background']
});
