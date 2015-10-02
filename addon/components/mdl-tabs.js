// import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';
import RippleSupport from '../mixins/ripple-support';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import layout from '../templates/components/mdl-tabs';

export default BaseComponent.extend(ParentComponentSupport, RippleSupport, {
  parentClassName: 'tabs',
  layout,
  classNames: ['mdl-tabs', 'mdl-js-tabs'],
  active: null,
  _mdlComponent: null,
  composableChildrenDebounceTime: 1,
  didInsertElement() {
    this._super(...arguments);
    let mdltabs = new window.MaterialTabs(this.get('element'));
    this.set('_mdlComponent', mdltabs);
    let [activeTab] = this.get('composableChildren').filter((x) => x.title === this.get('active'));
    if (activeTab) {
      activeTab.set('isActive', true);
    }
  },

  actions: {
    tabClicked(tab) {
      let [activeTab] = this.get('composableChildren').filter((x) => x.title === this.get('active'));
      if (activeTab) {
        activeTab.set('isActive', false);
      }
      this.set('active', tab.get('title'));
      tab.set('isActive', true);
    }
  }
});
