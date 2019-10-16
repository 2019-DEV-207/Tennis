define(['./view/tennisView'], function(TennisView) {

    'use strict';

    return function(selector) {       
        return new TennisView(selector);
    };

});