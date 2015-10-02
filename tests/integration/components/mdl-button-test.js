import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-button', 'Integration | Component | mdl button', {
  integration: true
});

test('it renders with the correct text', function(assert) {

  this.render(hbs`{{mdl-button}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`{{mdl-button text='Mike'}}`);
  assert.equal(this.$().text().trim(), 'Mike');

  // Template block usage:
  this.render(hbs`
    {{#mdl-button}}
      Hello
    {{/mdl-button}}
  `);

  assert.equal(this.$().text().trim(), 'Hello');
});

test('fires action "action" on click by default', function(assert) {
  assert.expect(1);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.on('buttonClicked', (val) => {
    assert.ok(val.element.className.indexOf('this-is-my-button') >= 0, 'Button component is passed as argument to action');
  });

  this.render(hbs`
    {{#mdl-button action='buttonClicked' class='this-is-my-button'}}
      Hello
    {{/mdl-button}}
  `);

  this.$('.mdl-button').click();
});

test('does not fire action when disabled', function(assert) {
  assert.expect(2);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  let clickCount = 0;
  this.on('buttonClicked', (val) => {
    clickCount++;
  });

  this.set('buttonDisabled', false);

  this.render(hbs`
    {{#mdl-button action='buttonClicked' class='this-is-my-button' disabled=buttonDisabled}}
      Hello
    {{/mdl-button}}
  `);

  this.$('.mdl-button').click();
  assert.equal(clickCount, 1, 'One click action fired');

  this.set('buttonDisabled', true);
  this.$('.mdl-button').click();

  assert.equal(clickCount, 1, 'Still one click');
});
