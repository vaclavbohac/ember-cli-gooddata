/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
    name: 'ember-cli-gooddata',

    included: function (app) {
        this._super.included(app);

        app.import(path.join(app.bowerDirectory, 'gooddata', 'gooddata.js'), {
            type: 'vendor'
        });

        app.import(path.join('vendor', 'shim.js'), {
            type: 'vendor',
            exports: { 'gooddata': ['default'] }
        });
    }
};
