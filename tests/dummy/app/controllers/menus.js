import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    menuItemClicked(component) {
      if (component) {
        if (component.get('age')) {
          window.alert(`Age: ${component.get('age')}`);
        } else {
          window.alert(`Amount: ${component.get('amount')}`);
        }
      }
    }
  }
});