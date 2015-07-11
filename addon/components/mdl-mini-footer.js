// import Ember from 'ember';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-mini-footer';

export default BaseComponent.extend(ParentComponentSupport, {
  tagName: 'footer',
  primaryClassName: 'mini-footer',
  layout
});
