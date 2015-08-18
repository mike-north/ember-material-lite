import Ember from 'ember';

const { computed, Mixin } = Ember;

export default Mixin.create({
  classNameBindings: ['_shadowClassString'],
  shadowDepth: 2,
  _shadowClassString: computed('shadowDepth', function() {
    return `mdl-shadow--${this.get('shadowDepth')}dp`;
  })
});