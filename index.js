/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-jqueryui',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/jquery-ui/jquery-ui.min.css');
    app.import('vendor/jquery-ui/jquery-ui.min.js');
  }
};
