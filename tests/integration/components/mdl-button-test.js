import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-button', 'Integration | Component | mdl button', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

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
