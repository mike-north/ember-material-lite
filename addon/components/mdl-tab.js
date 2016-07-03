import Ember from 'ember';
import MdlTabs from './mdl-tabs';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import layout from '../templates/components/mdl-tab';

const { Component, computed, String: { dasherize }, A } = Ember;

export default Component.extend(ChildComponentSupport, {
  layout,
  _parentComponentTypes: new A([MdlTabs]),
  classNames: ['mdl-tabs__panel'],
  classNameBindings: ['isActive:is-active'],
  isActive: false,
  dasherizedTitle: computed('title', function() {
    return dasherize(this.get('title'));
  })
});
