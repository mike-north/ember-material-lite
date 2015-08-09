import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | table', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /table', function(assert) {
  visit('/table');

  andThen(function() {
    assert.equal(currentURL(), '/table');
  });
});
