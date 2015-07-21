import BaseToggleComponent from './-base-toggle-component';

import layout from '../templates/components/mdl-checkbox';

export default BaseToggleComponent.extend({
  primaryClassName: 'checkbox',
  layout,
  didInsertElement() {
    this._super(...arguments);
    let mdlcheckbox = new window.MaterialCheckbox(this.get('element'));
    this.set('_mdlComponent', mdlcheckbox);
  }
});
