import { A } from '@ember/array';
import { next } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-table', 'Integration | Component | mdl table', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(5);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-table}}`);

  assert.equal(this.$().text().trim(), '');

  this.set('rows', new A([{ id: 0, name: 'Hello' }, { id: 1, name: 'World' }]));

  // Template block usage:
  this.render(hbs`
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
