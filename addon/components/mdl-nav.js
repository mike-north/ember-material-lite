import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-nav';

export default BaseComponent.extend({
  primaryClassName: 'layout',
  classNameBindings: [
    'fixedHeader:mdl-layout--fixed-header:mdl-layout--overlay-drawer-button',
    'fixedDrawer:mdl-layout--fixed-drawer'
  ],
  layout,
  fixedHeader: false,
  fixedDrawer: false,
  _mdlComponent: null,

  didInsertElement() {
    this._super(...arguments);
    let mdlnav = new window.MaterialLayout(this.get('element'));
    this.set('_mdlComponent', mdlnav);
  }

});