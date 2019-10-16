define([
    'backbone',
    'jquery',
    'text!../template/tennisTemplate.html'
    ], function(Backbone, $, template) {

    "use strict";

    return Backbone.View.extend({

        el: "#app",

        initialize: function(selector) {
            this.$el = $(selector);
            this.render();
        },

        render: function(){
            this.$el.html(template);
            return this;
        }

    });

});