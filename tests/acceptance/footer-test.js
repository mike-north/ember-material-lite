import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | footer', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /footer', function(assert) {
    visit('/footer');

    andThen(function() {
      assert.equal(currentURL(), '/footer');
    });
  });
});
