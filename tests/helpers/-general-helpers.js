import { run } from '@ember/runloop';

export function componentIsDisabled(assert, ctxt, selector) {
  let component = ctxt.subject();
  assert.equal(component._state, 'preRender');
  // Renders the component to the page
  ctxt.render();

  assert.ok(!component.$(selector || '').attr('disabled'), 'Component is not initially disabled');
  run(() => {
    component.set('disabled', true);
  });
  assert.ok(component.$(selector || '').attr('disabled'), 'Component is now disabled');
}

export function componentDisabledTest(selector) {
  return function(assert) {
    componentIsDisabled(assert, this, selector);
  };
}
