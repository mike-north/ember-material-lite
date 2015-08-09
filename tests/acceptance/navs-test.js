import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | navs', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /navs', function(assert) {
  visit('/navs');

  andThen(function() {
    assert.equal(currentURL(), '/navs');
  });
});
