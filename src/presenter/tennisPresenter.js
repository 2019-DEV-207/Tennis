define(['backbone'], function(Backbone) {

    "use strict";

    return Backbone.View.extend({

        initialize: function(tennisView) {
        	this.playerOneScore = 0;
			this.playerTwoScore = 0;
			this.winner = "";
			this.tennisView = tennisView;
        },

        calculateScore : function(player){
        	switch(player){
				case "player1":
					if(this.playerOneScore === "A" || this.playerTwoScore === "A"){
						this.setGameBallWinner("player1", this.playerOneScore, this.playerTwoScore);
					}
					else{
						this.isGameInDeuce() ? this.findAdvantageBallWinner("playerOneScore", "#score1") : this.setPlayerScore("playerOneScore", "player1", "#score1");
					}
					break;
				case "player2":
					if( this.playerOneScore === "A" || this.playerTwoScore === "A"){
						this.setGameBallWinner("player2", this.playerTwoScore, this.playerOneScore);
					}
					else{
						this.isGameInDeuce() ? this.findAdvantageBallWinner("playerTwoScore", "#score2") : this.setPlayerScore("playerTwoScore", "player2", "#score2");
					}
				default:
					break;
			};
        },

        isGameInDeuce: function(){

			return (this.playerOneScore === 40 && this.playerTwoScore === 40);

		},

		findAdvantageBallWinner: function(playerScore, element){

			this[playerScore] = "A";
			this.tennisView.updateScore(element, this[playerScore]);

		},

		setGameBallWinner: function(player, score1, score2){

			if(score1 === "A" && score2 === 40){
				this.setWinner(player);
			}
			else if(score1 === 40 && score2 === "A"){
				(player === "player1") ? this.playerTwoScore = 40 : this.playerOneScore = 40;
				this.tennisView.updateScore("#score1", this.playerOneScore);
				this.tennisView.updateScore("#score2", this.playerTwoScore);
			}

		},

        setPlayerScore : function(playerScore, player, element){

			if(this[playerScore] === 40){
				this.setWinner(player);
			}

			if(this[playerScore] === 0){
				this[playerScore] = 15;
			}
			else if(this[playerScore] === 15){
				this[playerScore] = 30;
			}
			else if(this[playerScore] === 30){
				this[playerScore] = 40;
			}			

			this.tennisView.updateScore(element, this[playerScore]);
		},

		setWinner: function(player){
			this.winner = player;
			this.tennisView.displayWinner(this.winner);
		}

    });

});