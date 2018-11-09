/* eslint-env node */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-material-lite',

  included(app) {
    this._super.included.apply(this, arguments);

    // app.vendorFiles['componentHandlerShim.js'] = 'vendor/componentHandlerShim.js';
    app.import('vendor/componentHandlerShim.js');
    app.import('vendor/material-design-lite/src/button/button.js');
    app.import('vendor/material-design-lite/src/checkbox/checkbox.js');
    app.import('vendor/material-design-lite/src/data-table/data-table.js');
    app.import('vendor/material-design-lite/src/icon-toggle/icon-toggle.js');
    app.import('vendor/material-design-lite/src/layout/layout.js');
    app.import('vendor/material-design-lite/src/menu/menu.js');
    app.import('vendor/material-design-lite/src/progress/progress.js');
    app.import('vendor/material-design-lite/src/radio/radio.js');
    app.import('vendor/material-design-lite/src/ripple/ripple.js');
    app.import('vendor/material-design-lite/src/slider/slider.js');
    app.import('vendor/material-design-lite/src/spinner/spinner.js');
    app.import('vendor/material-design-lite/src/switch/switch.js');
    app.import('vendor/material-design-lite/src/tabs/tabs.js');
    app.import('vendor/material-design-lite/src/textfield/textfield.js');
    app.import('vendor/material-design-lite/src/tooltip/tooltip.js');
  },

  treeForVendor(tree) {
    var materialDesignLite = new Funnel(path.dirname(require.resolve('material-design-lite/material.js')), {
      srcDir: 'src',
      destDir: 'material-design-lite/src'
    });

    return mergeTrees([
      tree,
      materialDesignLite
    ]);
  }
};
