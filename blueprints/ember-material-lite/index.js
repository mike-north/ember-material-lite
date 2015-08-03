var RSVP  = require('rsvp');
var chalk = require('chalk');

module.exports = {
  description: 'install ember-material-lite into a typical project',

  beforeInstall: function (options) {
    return RSVP.all([
      this.addBowerPackageToProject('material-design-lite', '~1.0.1')
    ]);
  },

  afterInstall: function () {
    return RSVP.all([
      this.addPackageToProject('ember-cli-sass', '^3.3.0'),
      this.addPackageToProject('ember-new-computed', '~1.0.0'),
      this.addPackageToProject('ember-legacy-views', '~0.2.0'),
      this.addPackageToProject('ember-truth-helpers', '1.0.0')
    ]).then(function () {
      this.ui.writeLine('\n' +
        chalk.bgGreen.black('NOTICE: If you have a reference to "material-design-lite-src" in your bower.json, you may now remove it safely.') +
        '\n'
      );
    }.bind(this));
  }
};
