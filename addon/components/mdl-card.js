import BaseComponent from './-base-toplevel-component';
import ShadowSupport from '../mixins/shadow-support';
import layout from '../templates/components/mdl-card';

export default BaseComponent.extend(ShadowSupport, {
  primaryClassName: 'card',
  _jsClass: false,
  layout
});
