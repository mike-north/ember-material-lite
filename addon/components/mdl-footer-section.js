import Ember from 'ember';
import MdlMiniFooter from './mdl-mini-footer';
import MdlMegaFooter from './mdl-mega-footer';
import ChildComponentSupport from '../mixins/child-component-support';
import layout from '../templates/components/mdl-footer-section';
import computed from 'ember-new-computed';

export default Ember.Component.extend(ChildComponentSupport, {
  _parentComponentTypes: Ember.A([MdlMegaFooter, MdlMiniFooter]),
  layout,
  align: 'middle',
  childComponentClassName: computed('align', {
    get() {
      return `${this.get('align')}-section`;
    }
  })
});
