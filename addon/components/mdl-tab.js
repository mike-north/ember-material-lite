import Ember from 'ember';
import MdlTabs from './mdl-tabs';
import layout from '../templates/components/mdl-tab';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  layout,
  classNames: ['mdl-tabs__panel'],
  classNameBindings: ['isActive:is-active'],
  isActive: false,
  dasherizedTitle: computed('title', {
    get() {
      return Ember.String.dasherize(this.get('title'));
    }
  }),
  init() {
    this._super(...arguments);
    this._registerWithTabs();
  },

  willDestroyElement() {
    this._super(...arguments);
    this._unregisterWithTabs();
  },

  _registerWithTabs() {
    let tabs = this.nearestOfType(MdlTabs);
    tabs.registerTab(this);
  },

  _unregisterWithTabs() {
    let tabs = this.nearestOfType(MdlTabs);
    tabs.unregisterTab(this);
  }
});
