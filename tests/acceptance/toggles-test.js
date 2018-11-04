import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | toggles', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /toggles', function(assert) {
    visit('/toggles');

    andThen(function() {
      assert.equal(currentURL(), '/toggles');
    });
  });
});
