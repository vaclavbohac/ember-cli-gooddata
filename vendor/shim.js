/* globals define, gooddata */

define('gooddata', [], function() {
    'use strict';

    return gooddata;
});

function defineModule(prop) {
    return function() {
        return gooddata[prop];
    };
}

for (var prop in gooddata) {
    if (Object.prototype.hasOwnProperty.call(gooddata, prop)) {
        define('gooddata/'+ prop, [], defineModule(prop));
    }
}
