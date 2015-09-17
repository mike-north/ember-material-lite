import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-nav-content';

export default BaseComponent.extend({

  layout,
  _jsClass: false,
  tagName: 'main',
  primaryClassName: 'layout__content'

});