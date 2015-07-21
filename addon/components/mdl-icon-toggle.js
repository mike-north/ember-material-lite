import BaseToggleComponent from './-base-toggle-component';
import layout from '../templates/components/mdl-icon-toggle';

export default BaseToggleComponent.extend({
  primaryClassName: 'icon-toggle',
  layout,
  didInsertElement() {
    this._super(...arguments);
    let mdlicontoggle = new window.MaterialIconToggle(this.get('element'));
    this.set('_mdlComponent', mdlicontoggle);
  }
});
