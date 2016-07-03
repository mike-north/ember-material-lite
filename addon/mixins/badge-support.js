import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  badge: null,
  hasBadgeBackground: true,
  attributeBindings: ['badge:data-badge'],
  classNameBindings: ['badge:mdl-badge', 'hasBadgeBackground::mdl-badge--no-background']
});
