'use strict';

module.exports = function(environment) {
  let ENV = {
    firebase: {
      apiKey: 'AIzaSyDwT4pipSwNXI68Vl45hqWItC_W1t8XNHY',
      authDomain: 'ember-crud-f9141.firebaseapp.com/',
      databaseURL: "https://ember-crud-f9141.firebaseio.com",
      projectId: "ember-crud-f9141",
      storageBucket: 'gs://ember-crud-f9141.appspot.com'
    },
    torii: {
      sessionServiceName: 'session'
    },
    modulePrefix: 'ember-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
