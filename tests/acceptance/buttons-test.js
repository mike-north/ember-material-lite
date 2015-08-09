import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | buttons', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /buttons', function(assert) {
  visit('/buttons');

  andThen(function() {
    assert.equal(currentURL(), '/buttons');
  });
});
