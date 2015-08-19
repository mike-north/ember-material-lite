/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-lite',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.vendorFiles['componentHandlerShim.js'] = 'vendor/componentHandlerShim.js';
    app.legacyFilesToAppend.push('vendor/componentHandlerShim.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/button/button.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/checkbox/checkbox.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/data-table/data-table.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/icon-toggle/icon-toggle.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/layout/layout.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/menu/menu.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/progress/progress.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/radio/radio.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/ripple/ripple.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/slider/slider.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/spinner/spinner.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/switch/switch.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/tabs/tabs.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/textfield/textfield.js');
    app.import(app.bowerDirectory + '/material-design-lite/src/tooltip/tooltip.js');
  }
};
