import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | tooltips', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /tooltips', function(assert) {
    visit('/tooltips');

    andThen(function() {
      assert.equal(currentURL(), '/tooltips');
    });
  });
});
