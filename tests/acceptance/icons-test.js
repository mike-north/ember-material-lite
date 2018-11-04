import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | icons', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /icons', function(assert) {
    visit('/icons');

    andThen(function() {
      assert.equal(currentURL(), '/icons');
    });
  });
});
