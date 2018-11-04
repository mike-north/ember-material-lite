import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | cards', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /cards', function(assert) {
    visit('/cards');

    andThen(function() {
      assert.equal(currentURL(), '/cards');
    });
  });
});
