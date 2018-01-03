import { computed } from '@ember/object';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  classNameBindings: ['_shadowClassString'],
  shadowDepth: 2,
  _shadowClassString: computed('shadowDepth', function() {
    return `mdl-shadow--${this.get('shadowDepth')}dp`;
  })
});