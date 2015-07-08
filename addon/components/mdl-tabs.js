import Ember from 'ember';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-tabs';

export default Ember.Component.extend(RippleSupport, {
  layout,
  classNames: ['mdl-tabs', 'mdl-js-tabs'],
  _tabs: [],
  active: null,
  init() {
    this._super(...arguments);
    this.set('_tabs', Ember.A([]));
  },
  didInsertElement() {
    this._super(...arguments);
    let activeTab = this.get('_tabs').findBy('title', this.get('active'));
    if (activeTab) {
      activeTab.set('isActive', true);
    }
  },

  registerTab(tab) {
    this.get('_tabs').addObject(tab);
  },

  unregisterTab(tab) {
    this.get('_tabs').removeObject(tab);
  },

  actions: {
    tabClicked(tab) {
      let activeTab = this.get('_tabs').findBy('title', this.get('active'));
      if (activeTab) {
        activeTab.set('isActive', false);
      }
      this.set('active', tab.get('title'));
      tab.set('isActive', true);
    }
  }
});
