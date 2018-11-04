import { A } from '@ember/array';
import { next } from '@ember/runloop';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mdl table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(5);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{mdl-table}}`);

    assert.equal(this.$().text().trim(), '');

    this.set('rows', new A([{ id: 0, name: 'Hello' }, { id: 1, name: 'World' }]));

    // Template block usage:
    await render(hbs`
      {{#mdl-table content=rows as |row|}}
        {{#mdl-table-col label='Id'}}
          {{row.id}}
        {{/mdl-table-col}}
        {{#mdl-table-col label='Name' isNonNumeric=true}}
          {{row.name}}
        {{/mdl-table-col}}
      {{/mdl-table}}
    `);

    next(() => {
      assert.equal(this.$('thead tr:first-child th').length, 2, 'Two columns in header');
      assert.equal(this.$('thead tr:first-child th').text(), 'IdName', 'Correct header labels');
      assert.equal(this.$('tbody tr:first-child td').length, 2, 'Two columns in body');
      assert.equal(this.$('tbody tr').length, 2, 'Two rows in body');
    });
  });
});
