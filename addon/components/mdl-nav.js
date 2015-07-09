// import Ember from 'ember';
import ParentComponentSupport from '../mixins/parent-component-support';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-nav';
import computed from 'ember-new-computed';

export default BaseComponent.extend(ParentComponentSupport, {
  primaryClassName: 'layout',
  classNameBindings: [
    'fixedHeader:mdl-layout--fixed-header:mdl-layout--overlay-drawer-button',
    'fixedDrawer:mdl-layout--fixed-drawer'
  ],
  layout,
  fixedHeader: false,
  fixedDrawer: false,
  waterfallMenu: false,
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
