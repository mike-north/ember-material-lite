import Ember from 'ember';
import BaseComponent from './-base-child-component';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdlTable from './mdl-table';
import layout from '../templates/components/mdl-table-col';

const { isEmpty, A } = Ember;

export default BaseComponent.extend(ChildComponentSupport, {
  _parentComponentTypes: new A([MdlTable]),
  tagName: 'td',
  layout,
  shouldRegisterToParent(parentComponent) {
    const childComponents = parentComponent.getComposableChildren();
    if (isEmpty(childComponents)) {
      return true;
    } else {
      const labels = parentComponent.getComposableChildren().map((x) => x.label);
      return labels.indexOf(this.get('label')) < 0;
    }
  }
});
