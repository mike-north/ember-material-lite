import Ember from 'ember';
import layout from '../templates/components/mdl-nav';
import computed from 'ember-new-computed';

export default Ember.Component.extend({
  classNames: ['mdl-layout mdl-js-layout'],
  classNameBindings: ['fixedHeader:mdl-layout--fixed-header:mdl-layout--overlay-drawer-button', 'fixedDrawer:mdl-layout--fixed-drawer'],
  layout,
  fixedHeader: false,
  fixedDrawer: false,
  waterfallMenu: false,
  _navItems: null,

  init() {
    this._super(...arguments);
    this.set('_navItems', Ember.A([]));
  },

  registerNavItem(navItem) {
    this.get('_navItems').addObject(navItem);
  },

  unregisterNavItem(navItem) {
    this.get('_navItems').removeObject(navItem);
  },

  _headerClassString: computed('waterfallMenu', {
    get() {
      let classes = ['mdl-layout__header'];
      if (this.get('waterfallMenu')) {
        classes.push('mdl-layout__header--waterfall');
      }
      return classes.join(' ');
    }
  })
});
