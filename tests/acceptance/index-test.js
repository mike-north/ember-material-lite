import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | index', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/buttons');
  });
});
