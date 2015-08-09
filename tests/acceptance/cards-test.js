import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | cards', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /cards', function(assert) {
  visit('/cards');

  andThen(function() {
    assert.equal(currentURL(), '/cards');
  });
});
