/* eslint-disable ember/no-mixins */
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
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

  init(...args) {
    this._super(...args);

    scheduleOnce('afterRender', this, this.initMaterialTabs);
  },

  initMaterialTabs() {
    const mdltabs = new window.MaterialTabs(this.element);
    this.set('_mdlComponent', mdltabs);
  },

  tabClicked: action(function (tab) {
    const [activeTab] = this.composableChildren.filter(
      ({ title }) => title === this.active,
    );

    if (activeTab) {
      activeTab.set('isActive', false);
    }

    this.set('active', tab.get('title'));
    tab.set('isActive', true);
  }),
});
