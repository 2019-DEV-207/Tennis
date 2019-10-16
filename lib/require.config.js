require.config({
    baseUrl: "",
    paths: {
        "lib": "../lib",
        "backbone": "lib/backbone",
        "src": "../src",
        "text": "lib/text",
        "underscore": "lib/underscore",
        "jquery":"lib/jquery"
    },
    shim: {
        'backbone': {

            deps: ['lib/underscore', 'lib/jquery'],

            exports: 'Backbone'
        }
    },
    waitSeconds: 15
});