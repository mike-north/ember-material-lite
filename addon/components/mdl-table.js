import BaseComponent from './-base-toplevel-component';
import ParentComponentSupport from 'ember-composability/mixins/parent-component-support';
import ShadowSupport from '../mixins/shadow-support';
import layout from '../templates/components/mdl-table';

export default BaseComponent.extend(ParentComponentSupport, ShadowSupport, {
  primaryClassName: 'data-table',
  tagName: 'table',
  composableChildrenDebounceTime: 1,
  layout,
  didInsertElement() {
    this._super(...arguments);
    let mdltable = new window.MaterialDataTable(this.get('element'));
    this.set('_mdlComponent', mdltable);
  }
});
