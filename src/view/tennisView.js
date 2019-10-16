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
        },

        events:{
            "click #player1" : "playerOneScoreCalculation",
            "click #player2" : "playerTwoScoreCalculation"
        },

        playerOneScoreCalculation: function(){
            this.tennisPresenter.calculateScore("player1");
        },

        updateScore: function(element,playerScore){
            this.$el.find(element).html(playerScore);
        },

        playerTwoScoreCalculation: function(){
            this.tennisPresenter.calculateScore("player2");
        },

        displayWinner: function(winner){
            this.$el.find("#winnerSection").show();
            this.$el.find("#winner").html(winner);
        }

    });

});