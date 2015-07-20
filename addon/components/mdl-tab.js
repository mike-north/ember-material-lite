import Ember from 'ember';
import MdlTabs from './mdl-tabs';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';
import layout from '../templates/components/mdl-tab';
import computed from 'ember-new-computed';

export default Ember.Component.extend(ChildComponentSupport, {
  layout,
  _parentComponentTypes: Ember.A([MdlTabs]),
  classNames: ['mdl-tabs__panel'],
  classNameBindings: ['isActive:is-active'],
  isActive: false,
  dasherizedTitle: computed('title', {
    get() {
      return Ember.String.dasherize(this.get('title'));
    }
  })
});
