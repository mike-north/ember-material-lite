import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | progress', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /progress', function(assert) {
    visit('/progress');

    andThen(function() {
      assert.equal(currentURL(), '/progress');
    });
  });
});
