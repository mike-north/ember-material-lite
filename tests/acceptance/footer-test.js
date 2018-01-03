import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | footer', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /footer', function(assert) {
  visit('/footer');

  andThen(function() {
    assert.equal(currentURL(), '/footer');
  });
});
