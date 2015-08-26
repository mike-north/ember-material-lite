import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import ClickActionSupport from '../mixins/click-action-support';
import MdlNav from './mdl-nav';

export default Ember.Component.extend(ChildComponentSupport, ClickActionSupport, {
  _parentComponentTypes: Ember.A([MdlNav]),
  inDrawer: true,
  inHeader: true
});
