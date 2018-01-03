import { A } from '@ember/array';
import Mixin from '@ember/object/mixin';
import { empty } from '@ember/object/computed';

export default Mixin.create({
  _registersButtons: true,
  _buttons: null,
  _noButtons: empty('_buttons'),
  init() {
    this._super(...arguments);
    this.set('_buttons', A([]));
  },

  registerButton(button) {
    this.get('_buttons').addObject(button);
  }
});
