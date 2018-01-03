import Component from '@ember/component';
import { A } from '@ember/array';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import ClickActionSupport from '../mixins/click-action-support';
import MdlNav from './mdl-nav';

export default Component.extend(ChildComponentSupport, ClickActionSupport, {
  _parentComponentTypes: A([MdlNav]),
  inDrawer: true,
  inHeader: true
});
