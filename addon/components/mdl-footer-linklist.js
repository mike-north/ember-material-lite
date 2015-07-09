import Ember from 'ember';
import MdlMiniFooter from './mdl-mini-footer';
import MdlMegaFooter from './mdl-mega-footer';
import ChildComponentSupport from '../mixins/child-component-support';
import layout from '../templates/components/mdl-footer-linklist';

export default Ember.Component.extend(ChildComponentSupport, {
  _parentComponentTypes: Ember.A([MdlMegaFooter, MdlMiniFooter]),
  layout,
  tagName: 'ul',
  childComponentClassName: 'link-list'
});
