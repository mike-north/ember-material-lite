import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | sliders', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /sliders', function(assert) {
    visit('/sliders');

    andThen(function() {
      assert.equal(currentURL(), '/sliders');
    });
  });
});
