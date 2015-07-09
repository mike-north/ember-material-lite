import Ember from 'ember';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-mega-footer';

export default BaseComponent.extend({
  primaryClassName: 'mega-footer',
  _jsClass: false,
  tagName: 'footer',
  layout
});
