import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-nav';
import _computed from 'ember-new-computed';

let { computed: { oneWay } } = Ember;

export default BaseComponent.extend(ParentComponentSupport, {
  primaryClassName: 'layout',
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
  _headerClassString: _computed('waterfallMenu', {
    get() {
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
    }
  }),

  didInsertElement() {
    this._super(...arguments);
    let mdlnav = new window.MaterialLayout(this.get('element'));
    this.set('_mdlComponent', mdlnav);
  }
});
