import Ember from 'ember';

const { computed: { empty } } = Ember;

export default Ember.Mixin.create({
  _registersButtons: true,
  _buttons: null,
  _noButtons: empty('_buttons'),
  init() {
    this._super(...arguments);
    this.set('_buttons', Ember.A([]));
  },

  registerButton(button) {
    this.get('_buttons').addObject(button);
  }
});
