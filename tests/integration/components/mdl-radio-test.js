import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-radio', 'Integration | Component | mdl radio', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(3);

  this.render(hbs`{{mdl-radio}}`);
  assert.equal(this.$().text().trim(), '');

  this.render(hbs`{{mdl-radio text='Mike'}}`);
  assert.equal(this.$().text().trim(), 'Mike');

  this.render(hbs`
    {{#mdl-radio}}
      template block text
    {{/mdl-radio}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('selection state test (only default group)', function(assert) {
  assert.expect(5);

  this.render(hbs`
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

test('selection state test (two groups)', function(assert) {
  assert.expect(6);

  this.render(hbs`
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

test('action "action" test', function(assert) {
  assert.expect(3);

  const counts = {
    tom: 0,
    yehuda: 0,
    stef: 0
  };

  this.on('tomSelected', () => counts.tom++);
  this.on('yehudaSelected', () => counts.yehuda++);
  this.on('stefSelected', () => counts.stef++);

  this.render(hbs`
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

test('action "change" test', function(assert) {
  assert.expect(3);

  const counts = {
    tom: 0,
    yehuda: 0,
    stef: 0
  };

  this.on('tomChanged', () => counts.tom++);
  this.on('yehudaChanged', () => counts.yehuda++);
  this.on('stefChanged', () => counts.stef++);

  this.render(hbs`
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
