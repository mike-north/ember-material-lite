import Ember from 'ember';
import ChildComponentSupport from '../mixins/child-component-support';
import MdlNav from './mdl-nav';

export default Ember.Component.extend(ChildComponentSupport, {
  _parentComponentTypes: Ember.A([MdlNav])
});
