/* eslint-env node */
let RSVP  = require('rsvp');

module.exports = {
  description: 'install ember-material-lite into a typical project',
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return RSVP.all([
      this.addPackageToProject('ember-cli-sass', '^5.3.1'),
      this.addPackageToProject('ember-cli-autoprefixer', '~0.6.0'),
      this.addPackageToProject('ember-new-computed', '^1.0.3'),
      this.addPackageToProject('ember-truth-helpers', '~1.2.0'),
      this.addPackageToProject('ember-composability', '~0.3.0'),
    ]);
  }
};
