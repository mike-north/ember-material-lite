import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';
import RippleSupport from '../mixins/ripple-support';
import ParentComponentSupport from '../mixins/parent-component-support';
import layout from '../templates/components/mdl-tabs';

export default BaseComponent.extend(RippleSupport, ParentComponentSupport, {
  parentClassName: 'tabs',
  layout,
  classNames: ['mdl-tabs', 'mdl-js-tabs'],
  active: null,
 
  didInsertElement() {
    this._super(...arguments);
    let activeTab = this.get('_childComponents').findBy('title', this.get('active'));
    if (activeTab) {
      activeTab.set('isActive', true);
    }
  },

  actions: {
    tabClicked(tab) {
      let activeTab = this.get('_childComponents').findBy('title', this.get('active'));
      if (activeTab) {
        activeTab.set('isActive', false);
      }
      this.set('active', tab.get('title'));
      tab.set('isActive', true);
    }
  }
});
