/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-lite',

  included: function(app) {
  	this._super.included(app);
    app.vendorFiles['componentHandlerShim.js'] = 'vendor/componentHandlerShim.js';
    app.legacyFilesToAppend.push('vendor/componentHandlerShim.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/ripple/ripple.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/button/button.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/layout/layout.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/progress/progress.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/spinner/spinner.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/tabs/tabs.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/switch/switch.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/checkbox/checkbox.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/radio/radio.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/icon-toggle/icon-toggle.js');
    app.import(app.bowerDirectory + '/material-design-lite-src/src/tooltip/tooltip.js');
  	app.import(app.bowerDirectory + '/material-design-lite/material.css', { destDir: 'material-design-lite/css' });
  }
};
