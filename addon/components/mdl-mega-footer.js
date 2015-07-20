// import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-mega-footer';

export default BaseComponent.extend(ParentComponentSupport, {
  primaryClassName: 'mega-footer',
  _jsClass: false,
  tagName: 'footer',
  layout
});
