import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

const { run } = Ember;

module('Acceptance | toggles', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /toggles', function(assert) {
  visit('/toggles');

  andThen(function() {
    assert.equal(currentURL(), '/toggles');
  });
});
