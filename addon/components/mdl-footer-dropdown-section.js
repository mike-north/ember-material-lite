import Component from '@ember/component';
import { A } from '@ember/array';
import layout from '../templates/components/mdl-footer-dropdown-section';
import MdlMiniFooter from './mdl-mini-footer';
import MdlMegaFooter from './mdl-mega-footer';
import ChildComponentSupport from 'ember-composability/mixins/child-component-support';

export default Component.extend(ChildComponentSupport, {
  _parentComponentTypes: A([MdlMegaFooter, MdlMiniFooter]),
  layout,
  childComponentClassName: 'drop-down-section'
});
