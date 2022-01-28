import { A } from '@ember/array';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ROWS = A([
  { id: 0, name: 'Hello' },
  { id: 1, name: 'World' },
]);

module('Integration | Component | mdl table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`{{mdl-table}}`);
    assert.equal(this.element.textContent.trim(), '');

    this.set('rows', ROWS);

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

    assert.equal(
      this.element.querySelectorAll('thead tr:first-child th').length,
      2,
      'Two columns in header',
    );
    assert.equal(
      this.element
        .querySelector('thead tr:first-child')
        .textContent.replace(/\s+/g, ''),
      'IdName',
      'Correct header labels',
    );
    assert.equal(
      this.element.querySelectorAll('tbody tr:first-child td').length,
      2,
      'Two columns in body',
    );
    assert.equal(
      this.element.querySelectorAll('tbody tr').length,
      2,
      'Two rows in body',
    );
  });
});
