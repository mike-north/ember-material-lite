import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | badges', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /badges', function(assert) {
  visit('/badges');

  andThen(function() {
    assert.equal(currentURL(), '/badges');
  });
});
