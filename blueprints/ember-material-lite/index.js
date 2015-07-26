var RSVP = require('rsvp');

module.exports = {
  description: 'install ember-material-lite into a typical project',

  beforeInstall: function (options) {
    return RSVP.all([
      this.addBowerPackageToProject('material-design-lite', '~1.0.1')
    ]);
  },

  afterInstall: function () {
    return RSVP.all([
      this.addPackageToProject('ember-cli-sass', '^3.3.0')
    ]);
  }
};
