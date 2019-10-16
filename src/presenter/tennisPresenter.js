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
        	if(player === "player1"){
        		if(this.playerOneScore === "A" || this.playerTwoScore === "A"){
					this.setGameBallWinner("player1", this.playerOneScore, this.playerTwoScore);
				}
				else{
					if(this.isGameInDeuce()){
						this.findAdvantageBallWinner("player1");
					}
					else{
						this.setPlayerOneScore();
					}
				}
        	}
        	else if(player === "player2"){
        		if( this.playerOneScore === "A" || this.playerTwoScore === "A"){
					this.setGameBallWinner("player2", this.playerTwoScore, this.playerOneScore);
				}
				else{
					if(this.isGameInDeuce()){
						this.findAdvantageBallWinner("player2");
					}
					else{
						this.setPlayerTwoScore();
					}
				}
        	}
        },

        isGameInDeuce: function(){
			return (this.playerOneScore === 40 && this.playerTwoScore === 40);
		},

		findAdvantageBallWinner: function(player){
			if(player === "player1"){
				this.playerOneScore = "A";
				this.tennisView.updateScore("#score1", this.playerOneScore);
			}
			else if(player === "player2"){
				this.playerTwoScore = "A";
				this.tennisView.updateScore("#score2", this.playerTwoScore);
			}
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

        setPlayerOneScore : function(){
			if(this.playerOneScore === 40){
				this.setWinner("player1");
			}
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
			if(this.playerTwoScore === 40){
				this.setWinner("player2");
			}
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
		},

		setWinner: function(player){
			this.winner = player;
			this.tennisView.displayWinner(this.winner);
		}

    });

});