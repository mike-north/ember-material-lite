import Ember from 'ember';

const { Controller, A } = Ember;

export default Controller.extend({
  rows: A([{
    id: 0,
    name: 'Hello'
  }, {
    id: 1,
    name: 'World'
  }])
});