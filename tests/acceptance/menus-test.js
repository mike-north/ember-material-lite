import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | menus', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /menus', function(assert) {
  visit('/menus');

  andThen(function() {
    assert.equal(currentURL(), '/menus');
  });
});
