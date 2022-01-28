/* eslint-disable ember/no-mixins */
import { isEmpty } from '@ember/utils';
import { A } from '@ember/array';
import BaseComponent from './-base-child-component';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdlTable from './mdl-table';
import layout from '../templates/components/mdl-table-col';

export default BaseComponent.extend(ChildComponentSupport, {
  _parentComponentTypes: A([MdlTable]),
  tagName: 'td',
  layout,
  classNameBindings: ['isNonNumeric:mdl-data-table__cell--non-numeric'],

  shouldRegisterToParent(parentComponent) {
    const childComponents = parentComponent.getComposableChildren();

    return isEmpty(childComponents)
      ? true
      : childComponents.map(({ label }) => label).indexOf(this.label) < 0;
  },
});
