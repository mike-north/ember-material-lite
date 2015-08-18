import Ember from 'ember';

const { computed, observer } = Ember;

export default Ember.Mixin.create({
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
