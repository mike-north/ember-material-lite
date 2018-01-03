import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
  rows: A([{
    id: 0,
    name: 'Hello'
  }, {
    id: 1,
    name: 'World'
  }])
});