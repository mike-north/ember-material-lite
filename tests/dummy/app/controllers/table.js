import Ember from 'ember';

export default Ember.Controller.extend({
  rows: Ember.A([{ id: 0, name: 'Hello' }, { id: 1, name: 'World' }])
});