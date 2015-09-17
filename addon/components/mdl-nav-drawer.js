import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-nav-drawer';

export default BaseComponent.extend({

  layout,
  _jsClass: false,
  tagName: 'div',
  primaryClassName: 'layout__drawer'

});