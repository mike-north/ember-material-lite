import Ember from 'ember';

const { Mixin } = Ember;

export default Mixin.create({
  click() {
    this.sendAction('action', this);
    this.sendAction('on-click', this);
  },
  change() {
    this.sendAction('on-change', this);
  }
});
