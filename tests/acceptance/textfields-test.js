import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

const { run } = Ember;

module('Acceptance | textfields', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /textfields', function(assert) {
  visit('/textfields');

  andThen(function() {
    assert.equal(currentURL(), '/textfields');
  });
});
