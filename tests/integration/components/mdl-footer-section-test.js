import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('mdl-footer-section', 'Integration | Component | mdl footer section', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-footer-section}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-footer-section}}
      template block text
    {{/mdl-footer-section}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
