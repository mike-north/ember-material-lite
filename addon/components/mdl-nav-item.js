import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import MdlNav from './mdl-nav';

export default Ember.Component.extend(ChildComponentSupport, {
  _parentComponentTypes: Ember.A([MdlNav]),
  inDrawer: true,
  inHeader: true
});
