import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | progress', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /progress', function(assert) {
  visit('/progress');

  andThen(function() {
    assert.equal(currentURL(), '/progress');
  });
});
