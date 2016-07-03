import Ember from 'ember';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import ClickActionSupport from '../mixins/click-action-support';
import MdlNav from './mdl-nav';

const { Component, A } = Ember;

export default Component.extend(ChildComponentSupport, ClickActionSupport, {
  _parentComponentTypes: A([MdlNav]),
  inDrawer: true,
  inHeader: true
});
