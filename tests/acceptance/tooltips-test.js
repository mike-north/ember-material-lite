import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

const { run } = Ember;

module('Acceptance | tooltips', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /tooltips', function(assert) {
  visit('/tooltips');

  andThen(function() {
    assert.equal(currentURL(), '/tooltips');
  });
});
