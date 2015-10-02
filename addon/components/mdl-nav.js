import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-nav';

let { computed, computed: { oneWay } } = Ember;

export default BaseComponent.extend(ParentComponentSupport, {
  primaryClassName: 'layout',
  composableChildrenDebounceTime: 1,
  classNameBindings: [
    'fixedHeader:mdl-layout--fixed-header:mdl-layout--overlay-drawer-button',
    'fixedDrawer:mdl-layout--fixed-drawer'
  ],
  layout,
  title: null,
  mobileTitle: oneWay('title'),
  fixedHeader: false,
  fixedDrawer: false,
  transparent: false,
  waterfallMenu: false,
  scrollHeader: false,
  includeHeader: true,
  includeHeaderLinks: true,
  includeDrawer: true,
  includeDrawerTitle: true,
  _mdlComponent: null,
  _drawerNavItems: computed('composableChildren.[]', 'composableChildren.@each.inDrawer', function() {
    return Ember.A(this.get('composableChildren').filter((x) => x.inDrawer));
  }),
  _headerNavItems: computed('composableChildren.[]', 'composableChildren.@each.inHeader', function() {
    return Ember.A(this.get('composableChildren').filter((x) => x.inHeader));
  }),

  _headerClassString: computed('waterfallMenu', function() {
    let classes = ['mdl-layout__header'];
    if (this.get('waterfallMenu')) {
      classes.push('mdl-layout__header--waterfall');
    }
    if (this.get('scrollHeader')) {
      classes.push('mdl-layout__header--scroll');
    }
    if (this.get('transparent')) {
      classes.push('mdl-layout__header--transparent');
    }
    return classes.join(' ');
  }),

  didInsertElement() {
    this._super(...arguments);
    let mdlnav = new window.MaterialLayout(this.get('element'));
    this.set('_mdlComponent', mdlnav);
  }
});
