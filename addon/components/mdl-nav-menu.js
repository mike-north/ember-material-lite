import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-nav-menu';

export default BaseComponent.extend({

  layout,
  _jsClass: false,
  tagName: 'nav',
  primaryClassName: 'navigation'

});