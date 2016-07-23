export function componentIsRipplified(assert, ctxt, params) {
  let component = ctxt.subject(params);
  assert.equal(component._state, 'preRender');
  ctxt.render();
  assert.equal(component._state, 'inDOM');
  assert.ok(ctxt.$().hasClass('mdl-js-ripple-effect'), 'Has mdl-js-ripple-effect class');
  let $rippleContainer = ctxt.$('span[class*="ripple-container"]');
  assert.equal($rippleContainer.length, 1, 'One ripple container is present');
  assert.equal($rippleContainer.find('.mdl-ripple').length, 1, 'One ripple in the container');
}

export function componentRippleTest(assert) {
  componentIsRipplified(assert, this);
}
