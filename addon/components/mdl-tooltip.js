import BaseComponent from './-base-toplevel-component';
import layout from '../templates/components/mdl-tooltip';

export default BaseComponent.extend({
  primaryClassName: 'tooltip',
  layout,
  isLarge: false,
  attributeBindings: ['for'],
  classNameBindings: ['isLarge:mdl-tooltip--large'],
  didInsertElement() {
    this._super(...arguments);
    let mdlTooltip = new window.MaterialTooltip(this.get('element'));
    this.set('_mdlComponent', mdlTooltip);
  }
});
