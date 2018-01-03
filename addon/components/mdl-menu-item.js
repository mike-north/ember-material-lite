import { A } from '@ember/array';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import BaseChildComponent from './-base-child-component';
import MdlMenu from './mdl-menu';
import layout from '../templates/components/mdl-menu-item';

export default BaseChildComponent.extend(ChildComponentSupport, {
  layout,
  tagName: 'li',
  _parentComponentTypes: A([MdlMenu]),
  _childComponentClassStringDelimeter: '__',
  childComponentClassName: 'item',
  click() {
    this.sendAction('action', this);
  }
});
