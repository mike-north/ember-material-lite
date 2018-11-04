import { run } from '@ember/runloop';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | navs', function(hooks) {
  hooks.beforeEach(function() {
    this.application = startApp();
  });

  hooks.afterEach(function() {
    run(this.application, 'destroy');
  });

  test('visiting /navs', function(assert) {
    visit('/navs');

    andThen(function() {
      assert.equal(currentURL(), '/navs');
    });
  });
});
