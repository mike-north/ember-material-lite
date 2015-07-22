import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-menu', 'Integration | Component | mdl menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-menu}}`);

  assert.equal(this.$().text().trim(), 'more_vert');

  // Template block usage:
  this.render(hbs`
    {{#mdl-menu}}
      template block text
    {{/mdl-menu}}
  `);

  assert.equal(this.$().text().trim().replace(/\s/g, ''), 'more_verttemplateblocktext');
});
