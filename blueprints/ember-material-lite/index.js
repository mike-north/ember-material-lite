var RSVP = require('rsvp');

module.exports = {
  description: 'install ember-material-lite into a typical project',

  beforeInstall: function (options) {
    return RSVP.all([
      this.addBowerPackageToProject('material-design-lite', '1.0.0'),
      this.addBowerPackageToProject('material-design-lite-src', 'google/material-design-lite#37286ae139b0ae336a8a7e9ed3b18ace1abff7ed')
    ]);
  },

  afterInstall: function () {
    return RSVP.all([
      this.addPackageToProject('ember-cli-sass', '^3.3.0')
    ]);
  }
};
