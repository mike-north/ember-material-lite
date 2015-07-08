import Ember from 'ember';
import MdlNav from './mdl-nav';

export default Ember.Component.extend({

  init() {
    this._super(...arguments);
    this._registerWithNav();
  },

  willDestroyElement() {
    this._super(...arguments);
    this._unregisterWithNav();
  },

  _unregisterWithNav() {
    let nav = this.nearestOfType(MdlNav);
    nav.unregisterNavItem(this);
  },

  _registerWithNav() {
    let nav = this.nearestOfType(MdlNav);
    nav.registerNavItem(this);
  }
});
