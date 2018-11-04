import { module, test } from 'qunit';

module('Unit | Utility | material scripts', function() {
  // Replace this with your real tests.
  test('material design light scripts are on window', function(assert) {
    assert.ok(window.MaterialButton, 'MaterialButton is loaded');
    assert.ok(window.MaterialTabs, 'MaterialTabs is loaded');
    assert.ok(window.MaterialRipple, 'MaterialRipple is loaded');
    assert.ok(window.MaterialLayout, 'MaterialLayout is loaded');
    assert.ok(window.MaterialSpinner, 'MaterialSpinner is loaded');
    assert.ok(window.MaterialProgress, 'MaterialProgress is loaded');
  });
});
