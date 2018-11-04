import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | buttons', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /buttons', function(assert) {
    visit('/buttons');

    andThen(function() {
      assert.equal(currentURL(), '/buttons');
    });
  });
});
