var RSVP = require('rsvp');

module.exports = {
  description: 'install ember-material-lite into a typical project',

  beforeInstall: function (options) {
    return RSVP.all([
      this.addBowerPackageToProject('material-design-lite', '1.0.0')
    ]);
  },

  afterInstall: function () {
    this.ui.writeLine('\n\n\nIf you wish to work with SASS, please add the following to your bower.json');
    this.ui.writeLine("'material-design-lite-src': 'https://github.com/google/material-design-lite.git#37286ae139b0ae336a8a7e9ed3b18ace1abff7ed',");
    this.ui.writeLine('\n\n\nAdd the following to your app/index.html for icons to work');
    this.ui.writeLine('<link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">\n');
    return RSVP.all([
      this.addPackageToProject('ember-cli-sass', '^3.3.0')
    ]);

  }
};
