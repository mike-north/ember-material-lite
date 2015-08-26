import Ember from 'ember';

export default Ember.Mixin.create({
  click() {
    this.sendAction('action', this);
    this.sendAction('on-click', this);
  },
  change() {
    this.sendAction('on-change', this);
  }
});
