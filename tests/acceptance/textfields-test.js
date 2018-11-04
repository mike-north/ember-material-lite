import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | textfields', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /textfields', function(assert) {
    visit('/textfields');

    andThen(function() {
      assert.equal(currentURL(), '/textfields');
    });
  });
});
