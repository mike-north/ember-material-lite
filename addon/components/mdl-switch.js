import BaseToggleComponent from './-base-toggle-component';
import layout from '../templates/components/mdl-switch';

export default BaseToggleComponent.extend({
  primaryClassName: 'switch',
  layout,
  didInsertElement() {
    this._super(...arguments);
    let mdlswitch = new window.MaterialSwitch(this.get('element'));
    this.set('_mdlComponent', mdlswitch);
  }
});
