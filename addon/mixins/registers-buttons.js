import Ember from 'ember';

const { A, Mixin, computed: { empty } } = Ember;

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
