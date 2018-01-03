import Mixin from '@ember/object/mixin';

export default Mixin.create({
  badge: null,
  hasBadgeBackground: true,
  attributeBindings: ['badge:data-badge'],
  classNameBindings: ['badge:mdl-badge', 'hasBadgeBackground::mdl-badge--no-background']
});
