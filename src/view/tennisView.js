define([
    'backbone',
    'jquery',
    '../presenter/tennisPresenter',
    'text!../template/tennisTemplate.html'
    ], function(Backbone, $, TennisPresenter, template) {

    "use strict";

    return Backbone.View.extend({

        el: "#app",

        initialize: function(selector) {
            this.$el = $(selector);
            this.tennisPresenter = new TennisPresenter(this);
            this.render();
        },

        render: function(){
            this.$el.html(template);
            return this;
        }

    });

});