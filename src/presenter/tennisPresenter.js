define(['backbone'], function(Backbone) {

    "use strict";

    return Backbone.View.extend({

        initialize: function(tennisView) {
       		this.playerOneScore = 0;
       		this.playerTwoScore = 0;
			this.tennisView = tennisView;
        },

        calculateScore : function(player){
        	if(player === "player1"){
        		this.setPlayerOneScore();
        	}
        	else if(player === "player2"){
        		this.setPlayerTwoScore();
        	}
        },

        setPlayerOneScore : function(){
			if(this.playerOneScore === 0){
				this.playerOneScore = 15;
			}
			else if(this.playerOneScore === 15){
				this.playerOneScore = 30;
			}
			else if(this.playerOneScore === 30){
				this.playerOneScore = 40;
			}			

			this.tennisView.updateScore("#score1", this.playerOneScore);
		},

		setPlayerTwoScore : function(){
			if(this.playerTwoScore === 0){
				this.playerTwoScore = 15;
			}
			else if(this.playerTwoScore === 15){
				this.playerTwoScore = 30;
			}
			else if(this.playerTwoScore === 30){
				this.playerTwoScore = 40;
			}			

			this.tennisView.updateScore("#score2", this.playerTwoScore);
		}

    });

});