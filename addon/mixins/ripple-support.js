import Mixin from '@ember/object/mixin';
import { observer, computed } from '@ember/object';

export default Mixin.create({
  hasRipples: true,
  _rippleClass: computed('_primaryClassNameString', function() {
    return `${this.get('_primaryClassNameString')}__ripple-container`;
  }),
  classNameBindings: ['hasRipples:mdl-js-ripple-effect'],

  _mdlComponentObserver: observer('_mdlComponent', function() {
    if (this.get('hasRipples')) {
      let mdlripples = new window.MaterialRipple(this.$(`.${this.get('_rippleClass')}`)[0]);
      this.set('_mdlRippleComponent', mdlripples);
    }
  })
});
