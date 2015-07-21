import Ember from 'ember';
import BaseComponent from './-base-child-component';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdlTable from './mdl-table';
import layout from '../templates/components/mdl-table-col';

const { isEmpty } = Ember;

export default BaseComponent.extend(ChildComponentSupport, {
  _parentComponentTypes: Ember.A([MdlTable]),
  tagName: 'td',
  layout,
  shouldRegisterToParent(parentComponent) {
    const childComponents = parentComponent.get('_childComponents');
    if (isEmpty(childComponents)) {
      return true;
    } else {
      const labels = parentComponent.get('_childComponents').mapBy('label');
      return labels.indexOf(this.get('label')) < 0;
    }
  }
});
