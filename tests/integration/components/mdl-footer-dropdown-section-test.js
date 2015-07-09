import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('mdl-footer-dropdown-section', 'Integration | Component | mdl footer dropdown section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-footer-dropdown-section}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-footer-dropdown-section}}
      template block text
    {{/mdl-footer-dropdown-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
