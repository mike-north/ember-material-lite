import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | sliders', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /sliders', function(assert) {
  visit('/sliders');

  andThen(function() {
    assert.equal(currentURL(), '/sliders');
  });
});
