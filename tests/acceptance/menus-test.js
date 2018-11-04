import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | menus', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /menus', function(assert) {
    visit('/menus');

    andThen(function() {
      assert.equal(currentURL(), '/menus');
    });
  });
});
