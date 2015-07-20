import Ember from 'ember';

const { observer } = Ember;

export default Ember.Mixin.create({
  hasRipples: true,
  _rippleClass: 'mdl-button__ripple-container',
  classNameBindings: ['hasRipples:mdl-js-ripple-effect'],

  _mdlComponentObserver: observer('_mdlComponent', function() {
    if (this.get('hasRipples')) {
      console.log(this.$(`.${this.get('_rippleClass')}`)[0]);
      let mdlripples = new window.MaterialRipple(this.$(`.mdl-button__ripple-container`)[0]);
      this.set('_mdlRippleComponent', mdlripples);
    }
  })
});
