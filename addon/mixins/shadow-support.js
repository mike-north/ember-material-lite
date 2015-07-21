import Ember from 'ember';
import computed from 'ember-new-computed';

export default Ember.Mixin.create({
  classNameBindings: ['_shadowClassString'],
  shadowDepth: 2,
  _shadowClassString: computed('shadowDepth', {
    get() {
      return `mdl-shadow--${this.get('shadowDepth')}dp`;
    }
  })
});