(function () {
  'use strict';
  window._materialLiteRegistrations = [];
  window.componentHandler = {
    register: function (config) {
      window._materialLiteRegistrations.push(config);
    }
  }
})();
