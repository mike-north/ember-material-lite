/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-lite',

  included: function(app) {
  	this._super.included(app);

  	app.import(app.bowerDirectory + '/material-design-lite/material.js');
  	app.import(app.bowerDirectory + '/material-design-lite/material.css', { destDir: 'material-design-lite/css' });

  }
};
