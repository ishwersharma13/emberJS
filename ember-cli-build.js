'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss',
    },
    fingerprint : {
      exclude : ["assets/images"]
    }
  });

  return app.toTree();
};
