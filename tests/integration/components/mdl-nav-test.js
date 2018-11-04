import $ from 'jquery';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mdl nav', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    // Template block usage:" + EOL +
    await render(hbs`
      {{#mdl-nav title="Nav Title"}}
        template block text
      {{/mdl-nav}}
    `);

    assert.equal(this.$().text().trim().replace(/\s+/g, ''), 'NavTitleNavTitlemenutemplateblocktext');
  });

  test('with closeDrawerOnItemClick=false', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    // Template block usage:" + EOL +
    let done = assert.async();

    await render(hbs`
      {{#mdl-nav title='Close on click'
        fixedHeader=true}}
        {{mdl-nav-item name='Buttons'}}
        {{mdl-nav-item name='Tabs'   }}
        {{mdl-nav-item name='Nav'    }}
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col white-text">
          Bacon ipsum dolor amet pork loin cow pancetta, t-bone leberkas jerky pork belly. Corned beef kielbasa t-bone, ham prosciutto ribeye chicken filet mignon pork loin turducken flank short ribs beef pancetta kevin. Swine pancetta salami frankfurter alcatra filet mignon. Bresaola pastrami hamburger turkey short loin. Andouille pig turducken, pork chop ham tongue pork capicola. Swine venison brisket, pork belly turkey doner chicken rump short loin.
        Tail shoulder cupim, tenderloin bacon short ribs ball tip alcatra sirloin ground round salami spare ribs kevin. Ground round meatball chuck kevin sirloin jerky tail ham. Filet mignon beef brisket boudin ball tip meatloaf shank. Tail tri-tip shankle bacon short ribs pork chop fatback cupim prosciutto andouille sausage turducken chicken filet mignon. Salami jowl fatback shank spare ribs. Boudin ground round ham, ball tip meatloaf tenderloin beef.
        Fatback flank ball tip corned beef. Ball tip spare ribs kielbasa bresaola turkey venison salami leberkas chicken jerky picanha sausage pork. Shoulder doner frankfurter jerky corned beef, alcatra beef ribs venison flank brisket short loin. Pastrami porchetta shoulder, short ribs ground round jowl doner meatball meatloaf sirloin. Capicola leberkas jowl, sausage pancetta chuck ham hock swine tail pork chop venison porchetta jerky brisket. Pig shankle filet mignon shank meatball. Prosciutto drumstick leberkas spare ribs, bacon ball tip pork chop hamburger t-bone.
        </div>
        </div>
      {{/mdl-nav}}
    `);
    this.$('.mdl-layout__drawer-button').click();
    setTimeout(() => {
      assert.equal($('.mdl-layout__drawer.is-visible').length, 1, 'Drawer is open after click');
      this.$('.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:last-child').click();
      setTimeout(() => {
        assert.equal($('.mdl-layout__drawer.is-visible').length, 1, 'Drawer is still open after second click');
        done();
      }, 100);
    }, 100);

    // assert.equal(this.$().text().trim().replace(/\s+/g, ''), 'NavTitleNavTitlemenutemplateblocktext');
  });

  test('with closeDrawerOnItemClick=true', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    // Template block usage:" + EOL +
    let done = assert.async();

    await render(hbs`
      {{#mdl-nav title='Close on click'
        fixedHeader=true
        closeDrawerOnItemClick=true}}
        {{mdl-nav-item name='Buttons'}}
        {{mdl-nav-item name='Tabs'   }}
        {{mdl-nav-item name='Nav'    }}
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--12-col white-text">
          Bacon ipsum dolor amet pork loin cow pancetta, t-bone leberkas jerky pork belly. Corned beef kielbasa t-bone, ham prosciutto ribeye chicken filet mignon pork loin turducken flank short ribs beef pancetta kevin. Swine pancetta salami frankfurter alcatra filet mignon. Bresaola pastrami hamburger turkey short loin. Andouille pig turducken, pork chop ham tongue pork capicola. Swine venison brisket, pork belly turkey doner chicken rump short loin.
        Tail shoulder cupim, tenderloin bacon short ribs ball tip alcatra sirloin ground round salami spare ribs kevin. Ground round meatball chuck kevin sirloin jerky tail ham. Filet mignon beef brisket boudin ball tip meatloaf shank. Tail tri-tip shankle bacon short ribs pork chop fatback cupim prosciutto andouille sausage turducken chicken filet mignon. Salami jowl fatback shank spare ribs. Boudin ground round ham, ball tip meatloaf tenderloin beef.
        Fatback flank ball tip corned beef. Ball tip spare ribs kielbasa bresaola turkey venison salami leberkas chicken jerky picanha sausage pork. Shoulder doner frankfurter jerky corned beef, alcatra beef ribs venison flank brisket short loin. Pastrami porchetta shoulder, short ribs ground round jowl doner meatball meatloaf sirloin. Capicola leberkas jowl, sausage pancetta chuck ham hock swine tail pork chop venison porchetta jerky brisket. Pig shankle filet mignon shank meatball. Prosciutto drumstick leberkas spare ribs, bacon ball tip pork chop hamburger t-bone.
        </div>
        </div>
      {{/mdl-nav}}
    `);
    this.$('.mdl-layout__drawer-button').click();
    setTimeout(() => {
      assert.equal($('.mdl-layout__drawer.is-visible').length, 1, 'Drawer is open after click');
      this.$('.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:last-child').click();
      setTimeout(() => {
        assert.equal($('.mdl-layout__drawer.is-visible').length, 0, 'Drawer is closed after second click');
        done();
      }, 100);
    }, 100);

    // assert.equal(this.$().text().trim().replace(/\s+/g, ''), 'NavTitleNavTitlemenutemplateblocktext');
  });
});
