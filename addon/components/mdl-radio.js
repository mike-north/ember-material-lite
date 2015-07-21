import BaseToggleComponent from './-base-toggle-component';
import layout from '../templates/components/mdl-radio';

export default BaseToggleComponent.extend({
  primaryClassName: 'radio',
  layout,

  didInsertElement() {
    this._super(...arguments);
    let mdlradio = new window.MaterialRadio(this.get('element'));
    this.set('_mdlComponent', mdlradio);
  }
});
