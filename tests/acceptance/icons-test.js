import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | icons', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /icons', function(assert) {
  visit('/icons');

  andThen(function() {
    assert.equal(currentURL(), '/icons');
  });
});
