'use strict';

define("dummy/tests/acceptance/badges-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | badges', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /badges', function (assert) {
      visit('/badges');
      andThen(function () {
        assert.equal(currentURL(), '/badges');
      });
    });
  });
});
define("dummy/tests/acceptance/buttons-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | buttons', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /buttons', function (assert) {
      visit('/buttons');
      andThen(function () {
        assert.equal(currentURL(), '/buttons');
      });
    });
  });
});
define("dummy/tests/acceptance/cards-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | cards', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /cards', function (assert) {
      visit('/cards');
      andThen(function () {
        assert.equal(currentURL(), '/cards');
      });
    });
  });
});
define("dummy/tests/acceptance/footer-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | footer', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /footer', function (assert) {
      visit('/footer');
      andThen(function () {
        assert.equal(currentURL(), '/footer');
      });
    });
  });
});
define("dummy/tests/acceptance/icons-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | icons', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /icons', function (assert) {
      visit('/icons');
      andThen(function () {
        assert.equal(currentURL(), '/icons');
      });
    });
  });
});
define("dummy/tests/acceptance/index-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | index', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /', function (assert) {
      visit('/');
      andThen(function () {
        assert.equal(currentURL(), '/buttons');
      });
    });
  });
});
define("dummy/tests/acceptance/menus-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | menus', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /menus', function (assert) {
      visit('/menus');
      andThen(function () {
        assert.equal(currentURL(), '/menus');
      });
    });
  });
});
define("dummy/tests/acceptance/navs-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | navs', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /navs', function (assert) {
      visit('/navs');
      andThen(function () {
        assert.equal(currentURL(), '/navs');
      });
    });
  });
});
define("dummy/tests/acceptance/progress-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | progress', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /progress', function (assert) {
      visit('/progress');
      andThen(function () {
        assert.equal(currentURL(), '/progress');
      });
    });
  });
});
define("dummy/tests/acceptance/sliders-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | sliders', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /sliders', function (assert) {
      visit('/sliders');
      andThen(function () {
        assert.equal(currentURL(), '/sliders');
      });
    });
  });
});
define("dummy/tests/acceptance/table-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | table', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /table', function (assert) {
      visit('/table');
      andThen(function () {
        assert.equal(currentURL(), '/table');
      });
    });
  });
});
define("dummy/tests/acceptance/textfields-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | textfields', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /textfields', function (assert) {
      visit('/textfields');
      andThen(function () {
        assert.equal(currentURL(), '/textfields');
      });
    });
  });
});
define("dummy/tests/acceptance/toggles-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | toggles', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /toggles', function (assert) {
      visit('/toggles');
      andThen(function () {
        assert.equal(currentURL(), '/toggles');
      });
    });
  });
});
define("dummy/tests/acceptance/tooltips-test", ["qunit", "dummy/tests/helpers/start-app"], function (_qunit, _startApp) {
  "use strict";

  (0, _qunit.module)('Acceptance | tooltips', function (hooks) {
    hooks.beforeEach(function () {
      this.application = (0, _startApp.default)();
    });
    hooks.afterEach(function () {
      Ember.run(this.application, 'destroy');
    });
    (0, _qunit.test)('visiting /tooltips', function (assert) {
      visit('/tooltips');
      andThen(function () {
        assert.equal(currentURL(), '/tooltips');
      });
    });
  });
});
define("dummy/tests/helpers/-general-helpers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.componentIsDisabled = componentIsDisabled;
  _exports.componentDisabledTest = componentDisabledTest;

  function componentIsDisabled(assert, ctxt, selector) {
    let component = ctxt.subject();
    assert.equal(component._state, 'preRender'); // Renders the component to the page

    ctxt.render();
    assert.ok(!component.$(selector || '').attr('disabled'), 'Component is not initially disabled');
    Ember.run(() => {
      component.set('disabled', true);
    });
    assert.ok(component.$(selector || '').attr('disabled'), 'Component is now disabled');
  }

  function componentDisabledTest(selector) {
    return function (assert) {
      componentIsDisabled(assert, this, selector);
    };
  }
});
define("dummy/tests/helpers/-ripple-helpers", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.componentIsRipplified = componentIsRipplified;
  _exports.componentRippleTest = componentRippleTest;

  function componentIsRipplified(assert, ctxt, params) {
    let component = ctxt.subject(params);
    assert.equal(component._state, 'preRender');
    ctxt.render();
    assert.equal(component._state, 'inDOM');
    assert.ok(ctxt.$().hasClass('mdl-js-ripple-effect'), 'Has mdl-js-ripple-effect class');
    let $rippleContainer = ctxt.$('span[class*="ripple-container"]');
    assert.equal($rippleContainer.length, 1, 'One ripple container is present');
    assert.equal($rippleContainer.find('.mdl-ripple').length, 1, 'One ripple in the container');
  }

  function componentRippleTest(assert) {
    componentIsRipplified(assert, this);
  }
});
define("dummy/tests/helpers/destroy-app", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = destroyApp;

  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define("dummy/tests/helpers/module-for-acceptance", ["exports", "qunit", "dummy/tests/helpers/start-app", "dummy/tests/helpers/destroy-app"], function (_exports, _qunit, _startApp, _destroyApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(name, options = {}) {
    (0, _qunit.module)(name, {
      beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach() {
        let afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(() => (0, _destroyApp.default)(this.application));
      }

    });
  }
});
define("dummy/tests/helpers/resolver", ["exports", "dummy/resolver", "dummy/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("dummy/tests/helpers/start-app", ["exports", "dummy/app", "dummy/config/environment"], function (_exports, _app, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = startApp;

  function startApp(attrs) {
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);

      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define("dummy/tests/integration/components/mdl-button-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl button', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.actions = {};

      this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
    });
    (0, _qunit.test)('it renders with the correct text', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "bBsD8nyX",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"mdl-button\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), '');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "lVDhERjm",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-button\",null,[[\"text\"],[\"Mike\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), 'Mike'); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "U1tpMIRt",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"mdl-button\",null,null,{\"statements\":[[0,\"        Hello\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), 'Hello');
    });
    (0, _qunit.test)('fires action "action" on click by default', async function (assert) {
      assert.expect(1); // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      this.actions.buttonClicked = val => {
        assert.ok(val.element.className.indexOf('this-is-my-button') >= 0, 'Button component is passed as argument to action');
      };

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "9auIKlif",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"mdl-button\",null,[[\"action\",\"class\"],[\"buttonClicked\",\"this-is-my-button\"]],{\"statements\":[[0,\"        Hello\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      this.$('.mdl-button').click();
    });
    (0, _qunit.test)('does not fire action when disabled', async function (assert) {
      assert.expect(2); // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      let clickCount = 0;

      this.actions.buttonClicked = () => {
        clickCount++;
      };

      this.set('buttonDisabled', false);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8XBxE946",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"mdl-button\",null,[[\"action\",\"class\",\"disabled\"],[\"buttonClicked\",\"this-is-my-button\",[23,[\"buttonDisabled\"]]]],{\"statements\":[[0,\"        Hello\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      this.$('.mdl-button').click();
      assert.equal(clickCount, 1, 'One click action fired');
      this.set('buttonDisabled', true);
      this.$('.mdl-button').click();
      assert.equal(clickCount, 1, 'Still one click');
    });
  });
});
define("dummy/tests/integration/components/mdl-checkbox-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl-checkbox', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "c0/lQKaN",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-checkbox\",null,[[\"disabled\"],[true]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '');
      assert.equal(!!this.element.querySelector('input').disabled, true);
    });
  });
});
define("dummy/tests/integration/components/mdl-menu-item-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl menu item', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
  });
});
define("dummy/tests/integration/components/mdl-menu-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl menu', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(2); // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4Uqt2Lex",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"mdl-menu\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), 'more_vert'); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "EcQJcZpi",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"mdl-menu\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim().replace(/\s/g, ''), 'more_verttemplateblocktext');
    });
  });
});
define("dummy/tests/integration/components/mdl-nav-test", ["jquery", "qunit", "ember-qunit", "@ember/test-helpers"], function (_jquery, _qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl nav', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
      // Template block usage:" + EOL +
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "C+yr9F7g",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"mdl-nav\",null,[[\"title\"],[\"Nav Title\"]],{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim().replace(/\s+/g, ''), 'NavTitleNavTitlemenutemplateblocktext');
    });
    (0, _qunit.test)('with closeDrawerOnItemClick=false', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
      // Template block usage:" + EOL +
      let done = assert.async();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "UGThfSm6",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"mdl-nav\",null,[[\"title\",\"fixedHeader\"],[\"Close on click\",true]],{\"statements\":[[0,\"        \"],[1,[27,\"mdl-nav-item\",null,[[\"name\"],[\"Buttons\"]]],false],[0,\"\\n        \"],[1,[27,\"mdl-nav-item\",null,[[\"name\"],[\"Tabs\"]]],false],[0,\"\\n        \"],[1,[27,\"mdl-nav-item\",null,[[\"name\"],[\"Nav\"]]],false],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"mdl-grid\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"mdl-cell mdl-cell--12-col white-text\"],[9],[0,\"\\n          Bacon ipsum dolor amet pork loin cow pancetta, t-bone leberkas jerky pork belly. Corned beef kielbasa t-bone, ham prosciutto ribeye chicken filet mignon pork loin turducken flank short ribs beef pancetta kevin. Swine pancetta salami frankfurter alcatra filet mignon. Bresaola pastrami hamburger turkey short loin. Andouille pig turducken, pork chop ham tongue pork capicola. Swine venison brisket, pork belly turkey doner chicken rump short loin.\\n        Tail shoulder cupim, tenderloin bacon short ribs ball tip alcatra sirloin ground round salami spare ribs kevin. Ground round meatball chuck kevin sirloin jerky tail ham. Filet mignon beef brisket boudin ball tip meatloaf shank. Tail tri-tip shankle bacon short ribs pork chop fatback cupim prosciutto andouille sausage turducken chicken filet mignon. Salami jowl fatback shank spare ribs. Boudin ground round ham, ball tip meatloaf tenderloin beef.\\n        Fatback flank ball tip corned beef. Ball tip spare ribs kielbasa bresaola turkey venison salami leberkas chicken jerky picanha sausage pork. Shoulder doner frankfurter jerky corned beef, alcatra beef ribs venison flank brisket short loin. Pastrami porchetta shoulder, short ribs ground round jowl doner meatball meatloaf sirloin. Capicola leberkas jowl, sausage pancetta chuck ham hock swine tail pork chop venison porchetta jerky brisket. Pig shankle filet mignon shank meatball. Prosciutto drumstick leberkas spare ribs, bacon ball tip pork chop hamburger t-bone.\\n        \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      this.$('.mdl-layout__drawer-button').click();
      setTimeout(() => {
        assert.equal((0, _jquery.default)('.mdl-layout__drawer.is-visible').length, 1, 'Drawer is open after click');
        this.$('.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:last-child').click();
        setTimeout(() => {
          assert.equal((0, _jquery.default)('.mdl-layout__drawer.is-visible').length, 1, 'Drawer is still open after second click');
          done();
        }, 100);
      }, 100); // assert.equal(this.$().text().trim().replace(/\s+/g, ''), 'NavTitleNavTitlemenutemplateblocktext');
    });
    (0, _qunit.test)('with closeDrawerOnItemClick=true', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
      // Template block usage:" + EOL +
      let done = assert.async();
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "MQRozMVt",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"mdl-nav\",null,[[\"title\",\"fixedHeader\",\"closeDrawerOnItemClick\"],[\"Close on click\",true,true]],{\"statements\":[[0,\"        \"],[1,[27,\"mdl-nav-item\",null,[[\"name\"],[\"Buttons\"]]],false],[0,\"\\n        \"],[1,[27,\"mdl-nav-item\",null,[[\"name\"],[\"Tabs\"]]],false],[0,\"\\n        \"],[1,[27,\"mdl-nav-item\",null,[[\"name\"],[\"Nav\"]]],false],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"mdl-grid\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"mdl-cell mdl-cell--12-col white-text\"],[9],[0,\"\\n          Bacon ipsum dolor amet pork loin cow pancetta, t-bone leberkas jerky pork belly. Corned beef kielbasa t-bone, ham prosciutto ribeye chicken filet mignon pork loin turducken flank short ribs beef pancetta kevin. Swine pancetta salami frankfurter alcatra filet mignon. Bresaola pastrami hamburger turkey short loin. Andouille pig turducken, pork chop ham tongue pork capicola. Swine venison brisket, pork belly turkey doner chicken rump short loin.\\n        Tail shoulder cupim, tenderloin bacon short ribs ball tip alcatra sirloin ground round salami spare ribs kevin. Ground round meatball chuck kevin sirloin jerky tail ham. Filet mignon beef brisket boudin ball tip meatloaf shank. Tail tri-tip shankle bacon short ribs pork chop fatback cupim prosciutto andouille sausage turducken chicken filet mignon. Salami jowl fatback shank spare ribs. Boudin ground round ham, ball tip meatloaf tenderloin beef.\\n        Fatback flank ball tip corned beef. Ball tip spare ribs kielbasa bresaola turkey venison salami leberkas chicken jerky picanha sausage pork. Shoulder doner frankfurter jerky corned beef, alcatra beef ribs venison flank brisket short loin. Pastrami porchetta shoulder, short ribs ground round jowl doner meatball meatloaf sirloin. Capicola leberkas jowl, sausage pancetta chuck ham hock swine tail pork chop venison porchetta jerky brisket. Pig shankle filet mignon shank meatball. Prosciutto drumstick leberkas spare ribs, bacon ball tip pork chop hamburger t-bone.\\n        \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      this.$('.mdl-layout__drawer-button').click();
      setTimeout(() => {
        assert.equal((0, _jquery.default)('.mdl-layout__drawer.is-visible').length, 1, 'Drawer is open after click');
        this.$('.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:last-child').click();
        setTimeout(() => {
          assert.equal((0, _jquery.default)('.mdl-layout__drawer.is-visible').length, 0, 'Drawer is closed after second click');
          done();
        }, 100);
      }, 100); // assert.equal(this.$().text().trim().replace(/\s+/g, ''), 'NavTitleNavTitlemenutemplateblocktext');
    });
  });
});
define("dummy/tests/integration/components/mdl-radio-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl radio', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    hooks.beforeEach(function () {
      this.actions = {};

      this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
    });
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(3);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "JdMnqBMT",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"mdl-radio\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), '');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ChTcoQhw",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-radio\",null,[[\"text\"],[\"Mike\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), 'Mike');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "CK/FtmUV",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"mdl-radio\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), 'template block text');
    });
    (0, _qunit.test)('selection state test (only default group)', async function (assert) {
      assert.expect(5);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "EyfeslP9",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"checked\",\"value\",\"text\"],[true,\"tom\",\"Tom\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"value\",\"text\"],[\"stef\",\"Stefan\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"value\",\"text\"],[\"yehuda\",\"Yehuda\"]]],false],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim().replace(/[\n\s]+/g, ''), 'TomStefanYehuda');
      assert.equal(this.$('input:checked').length, 1, 'One button is selected');
      assert.equal(this.$('input:checked').val(), 'tom', 'Tom is selected');
      this.$('input[value="stef"]').click();
      assert.equal(this.$('input:checked').length, 1, 'One button is selected');
      assert.equal(this.$('input:checked').val(), 'stef', 'Stef is selected');
    });
    (0, _qunit.test)('selection state test (two groups)', async function (assert) {
      assert.expect(6);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VbCnG3az",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"checked\",\"value\",\"text\"],[true,\"tom\",\"Tom\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"value\",\"text\"],[\"stef\",\"Stefan\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"name\",\"value\",\"text\"],[\"katz\",\"yehuda\",\"Yehuda\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"name\",\"value\",\"text\"],[\"katz\",\"leah\",\"Leah\"]]],false],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim().replace(/[\n\s]+/g, ''), 'TomStefanYehudaLeah');
      assert.equal(this.$('input:checked').length, 1, 'One button is selected');
      assert.equal(this.$('input:checked').val(), 'tom', 'Tom is selected');
      this.$('input[value="leah"]').click();
      assert.equal(this.$('input:checked').length, 2, 'Two buttons are selected');
      assert.equal(this.$('input:checked[name="default"]').val(), 'tom', 'Tom is selected');
      assert.equal(this.$('input:checked[name="katz"]').val(), 'leah', 'Leah is selected');
    });
    (0, _qunit.test)('action "action" test', async function (assert) {
      assert.expect(3);
      let counts = {
        tom: 0,
        yehuda: 0,
        stef: 0
      };

      this.actions.tomSelected = () => counts.tom++;

      this.actions.yehudaSelected = () => counts.yehuda++;

      this.actions.stefSelected = () => counts.stef++;

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "b3BZBU40",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"checked\",\"value\",\"text\",\"action\"],[true,\"tom\",\"Tom\",\"tomSelected\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"value\",\"text\",\"action\"],[\"stef\",\"Stefan\",\"stefSelected\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"value\",\"text\",\"action\"],[\"yehuda\",\"Yehuda\",\"yehudaSelected\"]]],false],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      this.$('input[value="stef"]').click();
      assert.deepEqual(counts, {
        tom: 0,
        stef: 1,
        yehuda: 0
      }, 'stef: 1');
      this.$('input[value="yehuda"]').click();
      assert.deepEqual(counts, {
        tom: 0,
        stef: 1,
        yehuda: 1
      }, 'stef: 1, yehuda: 1');
      this.$('input[value="stef"]').click();
      assert.deepEqual(counts, {
        tom: 0,
        stef: 2,
        yehuda: 1
      }, 'stef: 2, yehuda: 1');
    });
    (0, _qunit.test)('action "change" test', async function (assert) {
      assert.expect(3);
      let counts = {
        tom: 0,
        yehuda: 0,
        stef: 0
      };

      this.actions.tomChanged = () => counts.tom++;

      this.actions.yehudaChanged = () => counts.yehuda++;

      this.actions.stefChanged = () => counts.stef++;

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "n/JOODpA",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"checked\",\"value\",\"text\",\"on-change\"],[true,\"tom\",\"Tom\",\"tomChanged\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"value\",\"text\",\"on-change\"],[\"stef\",\"Stefan\",\"stefChanged\"]]],false],[0,\"\\n      \"],[1,[27,\"mdl-radio\",null,[[\"value\",\"text\",\"on-change\"],[\"yehuda\",\"Yehuda\",\"yehudaChanged\"]]],false],[0,\"\\n    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      this.$('input[value="stef"]').click();
      assert.deepEqual(counts, {
        tom: 0,
        stef: 1,
        yehuda: 0
      }, 'stef: 1');
      this.$('input[value="yehuda"]').click();
      assert.deepEqual(counts, {
        tom: 0,
        stef: 1,
        yehuda: 1
      }, 'stef: 1, yehuda: 1');
      this.$('input[value="stef"]').click();
      assert.deepEqual(counts, {
        tom: 0,
        stef: 2,
        yehuda: 1
      }, 'stef: 2, yehuda: 1');
    });
  });
});
define("dummy/tests/integration/components/mdl-slider-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl slider', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(1); // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "9Vgf7Vcp",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"mdl-slider\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), '');
    });
  });
});
define("dummy/tests/integration/components/mdl-table-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(5); // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "pOB8/6GS",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"mdl-table\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$().text().trim(), '');
      this.set('rows', new Ember.A([{
        id: 0,
        name: 'Hello'
      }, {
        id: 1,
        name: 'World'
      }])); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "PvfBeWzx",
        "block": "{\"symbols\":[\"row\"],\"statements\":[[0,\"\\n\"],[4,\"mdl-table\",null,[[\"content\"],[[23,[\"rows\"]]]],{\"statements\":[[4,\"mdl-table-col\",null,[[\"label\"],[\"Id\"]],{\"statements\":[[0,\"          \"],[1,[22,1,[\"id\"]],false],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"mdl-table-col\",null,[[\"label\",\"isNonNumeric\"],[\"Name\",true]],{\"statements\":[[0,\"          \"],[1,[22,1,[\"name\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      Ember.run.next(() => {
        assert.equal(this.$('thead tr:first-child th').length, 2, 'Two columns in header');
        assert.equal(this.$('thead tr:first-child th').text(), 'IdName', 'Correct header labels');
        assert.equal(this.$('tbody tr:first-child td').length, 2, 'Two columns in body');
        assert.equal(this.$('tbody tr').length, 2, 'Two rows in body');
      });
    });
  });
});
define("dummy/tests/integration/components/mdl-textarea-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl textarea', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(1); // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZrzDKufG",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"mdl-textarea\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('textarea').length, 1, 'Rendered a textarea');
    });
    (0, _qunit.test)('value bindings', async function (assert) {
      assert.expect(2);
      this.set('value', 'hello');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "LD7PAl8F",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-textarea\",null,[[\"value\"],[[23,[\"value\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('textarea').val(), 'hello');
      this.$('textarea').val('bye').change();
      assert.equal(this.get('value'), 'bye');
    });
    (0, _qunit.test)('html validations', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "tdqusisW",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-textarea\",null,[[\"pattern\",\"errorMessage\"],[\"[A-Z]{2}\",\"Please use two upper case letters\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      this.$('textarea').val('ny').change();
      assert.equal(this.$().text().trim(), 'Please use two upper case letters');
      assert.ok(this.$('.mdl-textfield__error').is(':visible'), 'Errors are visible');
    });
    (0, _qunit.test)('custom errorMessage', async function (assert) {
      assert.expect(5);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "WyIC55ev",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-textarea\",null,[[\"errorMessage\"],[[23,[\"message\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');
      this.set('message', 'That text is not acceptable');
      assert.equal(this.$().text().trim(), 'That text is not acceptable');
      assert.ok(this.$('.mdl-textfield__error').is(':visible'), 'Errors are visible');
      this.set('message', '');
      assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');
      this.set('message', []);
      assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');
    });
  });
});
define("dummy/tests/integration/components/mdl-textfield-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | mdl textfield', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      assert.expect(1); // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "9qB5TFJR",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"mdl-textfield\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('input').length, 1, 'Rendered an input');
    });
    (0, _qunit.test)('value bindings', async function (assert) {
      assert.expect(2);
      this.set('value', 'hello');
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "pES9d4OE",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-textfield\",null,[[\"value\"],[[23,[\"value\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('input').val(), 'hello');
      this.$('input').val('bye').change();
      assert.equal(this.get('value'), 'bye');
    });
    (0, _qunit.test)('html validations', async function (assert) {
      assert.expect(2);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "v6WVlPP4",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-textfield\",null,[[\"pattern\",\"errorMessage\"],[\"[A-Z]{2}\",\"Please use two upper case letters\"]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      this.$('input').val('ny').change();
      assert.equal(this.$().text().trim(), 'Please use two upper case letters');
      assert.ok(this.$('.mdl-textfield__error').is(':visible'), 'Errors are visible');
    });
    (0, _qunit.test)('custom errorMessage', async function (assert) {
      assert.expect(5);
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "QCB9f4a+",
        "block": "{\"symbols\":[],\"statements\":[[1,[27,\"mdl-textfield\",null,[[\"errorMessage\"],[[23,[\"message\"]]]]],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');
      this.set('message', 'That input is not acceptable');
      assert.equal(this.$().text().trim(), 'That input is not acceptable');
      assert.ok(this.$('.mdl-textfield__error').is(':visible'), 'Errors are visible');
      this.set('message', '');
      assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');
      this.set('message', []);
      assert.equal(this.$('.mdl-textfield__error').length, 0, 'No errors are visible');
    });
  });
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/x-example.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-example.js should pass ESLint\n\n');
  });
  QUnit.test('components/x-nav.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/x-nav.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/menus.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/menus.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/progress.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/progress.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/table.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/textfields.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/textfields.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/toggles.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/toggles.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/badges.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/badges.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/buttons.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/buttons.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/cards.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/cards.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/x-example.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/x-example.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/components/x-nav.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/components/x-nav.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/footer.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/footer.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/icons.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/icons.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/menus.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/menus.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/navs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/navs.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/progress.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/progress.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/sliders.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/sliders.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-badge-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-badge-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-badge-icons.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-badge-icons.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-button-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-button-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-button-float.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-button-float.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-button-icon.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-button-icon.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-button-raised.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-button-raised.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-card-actions.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-card-actions.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-card-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-card-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-footer-mega.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-footer-mega.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-footer-mini.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-footer-mini.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-icon-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-icon-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-menu-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-menu-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-nav-close-on-click.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-nav-close-on-click.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-nav-drawer-only.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-nav-drawer-only.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-nav-fixed-drawer.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-nav-fixed-drawer.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-nav-fixed-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-nav-fixed-header.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-nav-image.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-nav-image.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-nav-scroll-header.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-nav-scroll-header.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-progress-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-progress-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-slider-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-slider-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-spinner-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-spinner-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-table-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-table-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-tabs-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-tabs-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-textfield-basic.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-textfield-basic.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-textfield-expandable.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-textfield-expandable.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-textfield-patterns.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-textfield-patterns.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-textfield-textarea.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-textfield-textarea.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-toggles-checkbox.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-toggles-checkbox.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-toggles-icon.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-toggles-icon.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-toggles-radio.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-toggles-radio.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-toggles-switch.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-toggles-switch.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/snippets/mdl-tooltip.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/snippets/mdl-tooltip.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/table.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/table.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/tabs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/tabs.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/textfields.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/textfields.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/toggles.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/toggles.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('dummy/templates/tooltips.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/tooltips.hbs should pass TemplateLint.\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/badges-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/badges-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/buttons-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/buttons-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/cards-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/cards-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/footer-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/footer-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/icons-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/icons-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/menus-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/menus-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/navs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/navs-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/progress-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/progress-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/sliders-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/sliders-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/table-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/textfields-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/textfields-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/toggles-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/toggles-test.js should pass ESLint\n\n');
  });
  QUnit.test('acceptance/tooltips-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/tooltips-test.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/-general-helpers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/-general-helpers.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/-ripple-helpers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/-ripple-helpers.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-button-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-checkbox-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-checkbox-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-menu-item-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-menu-item-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-menu-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-menu-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-nav-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-nav-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-radio-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-radio-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-slider-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-slider-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-table-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-textarea-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-textarea-test.js should pass ESLint\n\n');
  });
  QUnit.test('integration/components/mdl-textfield-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/mdl-textfield-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/initializers/material-lite-extensions-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/material-lite-extensions-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/material-scripts-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/material-scripts-test.js should pass ESLint\n\n');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dummy/tests/unit/initializers/material-lite-extensions-test", ["dummy/initializers/material-lite-extensions", "qunit"], function (_materialLiteExtensions, _qunit) {
  "use strict";

  let container, application;
  (0, _qunit.module)('Unit | Initializer | material lite extensions', function (hooks) {
    hooks.beforeEach(function () {
      Ember.run(function () {
        application = Ember.Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    }); // Replace this with your real tests.

    (0, _qunit.test)('it works', function (assert) {
      (0, _materialLiteExtensions.initialize)(container, application); // you would normally confirm the results of the initializer here

      assert.ok(true);
    });
  });
});
define("dummy/tests/unit/utils/material-scripts-test", ["qunit"], function (_qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | material scripts', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('material design light scripts are on window', function (assert) {
      assert.ok(window.MaterialButton, 'MaterialButton is loaded');
      assert.ok(window.MaterialTabs, 'MaterialTabs is loaded');
      assert.ok(window.MaterialRipple, 'MaterialRipple is loaded');
      assert.ok(window.MaterialLayout, 'MaterialLayout is loaded');
      assert.ok(window.MaterialSpinner, 'MaterialSpinner is loaded');
      assert.ok(window.MaterialProgress, 'MaterialProgress is loaded');
    });
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
