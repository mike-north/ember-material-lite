import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

const { run } = Ember;

module('Acceptance | sliders', {
  beforeEach() {
    this.application = startApp();
  },

  afterEach() {
    run(this.application, 'destroy');
  }
});

test('visiting /sliders', function(assert) {
  visit('/sliders');

  andThen(function() {
    assert.equal(currentURL(), '/sliders');
  });
});
