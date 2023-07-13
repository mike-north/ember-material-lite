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
      const selector = `.${this.get("_rippleClass")}`;
      const element = this.element.querySelectorAll(selector)[0];
      let mdlripples = new window.MaterialRipple(element);
      this.set('_mdlRippleComponent', mdlripples);
    }
  })
});
