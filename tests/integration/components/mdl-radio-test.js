import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mdl radio', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  test('it renders', async function(assert) {
    assert.expect(3);

    await render(hbs`{{mdl-radio}}`);
    assert.equal(this.$().text().trim(), '');

    await render(hbs`{{mdl-radio text='Mike'}}`);
    assert.equal(this.$().text().trim(), 'Mike');

    await render(hbs`
      {{#mdl-radio}}
        template block text
      {{/mdl-radio}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');
  });

  test('selection state test (only default group)', async function(assert) {
    assert.expect(5);

    await render(hbs`
      {{mdl-radio checked=true value='tom' text='Tom'}}
      {{mdl-radio value='stef' text='Stefan'}}
      {{mdl-radio value='yehuda' text='Yehuda'}}
    `);

    assert.equal(this.$().text().trim().replace(/[\n\s]+/g, ''), 'TomStefanYehuda');

    assert.equal(this.$('input:checked').length, 1, 'One button is selected');
    assert.equal(this.$('input:checked').val(), 'tom', 'Tom is selected');

    this.$('input[value="stef"]').click();

    assert.equal(this.$('input:checked').length, 1, 'One button is selected');
    assert.equal(this.$('input:checked').val(), 'stef', 'Stef is selected');
  });

  test('selection state test (two groups)', async function(assert) {
    assert.expect(6);

    await render(hbs`
      {{mdl-radio checked=true value='tom' text='Tom'}}
      {{mdl-radio value='stef' text='Stefan'}}
      {{mdl-radio name='katz' value='yehuda' text='Yehuda'}}
      {{mdl-radio name='katz' value='leah' text='Leah'}}
    `);

    assert.equal(this.$().text().trim().replace(/[\n\s]+/g, ''), 'TomStefanYehudaLeah');

    assert.equal(this.$('input:checked').length, 1, 'One button is selected');
    assert.equal(this.$('input:checked').val(), 'tom', 'Tom is selected');

    this.$('input[value="leah"]').click();

    assert.equal(this.$('input:checked').length, 2, 'Two buttons are selected');
    assert.equal(this.$('input:checked[name="default"]').val(), 'tom', 'Tom is selected');
    assert.equal(this.$('input:checked[name="katz"]').val(), 'leah', 'Leah is selected');
  });

  test('action "action" test', async function(assert) {
    assert.expect(3);

    let counts = {
      tom: 0,
      yehuda: 0,
      stef: 0
    };

    this.actions.tomSelected = () => counts.tom++;
    this.actions.yehudaSelected = () => counts.yehuda++;
    this.actions.stefSelected = () => counts.stef++;

    await render(hbs`
      {{mdl-radio checked=true value='tom' text='Tom' action='tomSelected'}}
      {{mdl-radio value='stef' text='Stefan' action='stefSelected'}}
      {{mdl-radio value='yehuda' text='Yehuda' action='yehudaSelected'}}
    `);

    this.$('input[value="stef"]').click();
    assert.deepEqual(counts, { tom: 0, stef: 1, yehuda: 0 }, 'stef: 1');

    this.$('input[value="yehuda"]').click();
    assert.deepEqual(counts, { tom: 0, stef: 1, yehuda: 1 }, 'stef: 1, yehuda: 1');

    this.$('input[value="stef"]').click();
    assert.deepEqual(counts, { tom: 0, stef: 2, yehuda: 1 }, 'stef: 2, yehuda: 1');

  });

  test('action "change" test', async function(assert) {
    assert.expect(3);

    let counts = {
      tom: 0,
      yehuda: 0,
      stef: 0
    };

    this.actions.tomChanged = () => counts.tom++;
    this.actions.yehudaChanged = () => counts.yehuda++;
    this.actions.stefChanged = () => counts.stef++;

    await render(hbs`
      {{mdl-radio checked=true value='tom' text='Tom' on-change='tomChanged'}}
      {{mdl-radio value='stef' text='Stefan' on-change='stefChanged'}}
      {{mdl-radio value='yehuda' text='Yehuda' on-change='yehudaChanged'}}
    `);

    this.$('input[value="stef"]').click();
    assert.deepEqual(counts, { tom: 0, stef: 1, yehuda: 0 }, 'stef: 1');

    this.$('input[value="yehuda"]').click();
    assert.deepEqual(counts, { tom: 0, stef: 1, yehuda: 1 }, 'stef: 1, yehuda: 1');

    this.$('input[value="stef"]').click();
    assert.deepEqual(counts, { tom: 0, stef: 2, yehuda: 1 }, 'stef: 2, yehuda: 1');

  });
});
