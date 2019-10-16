define(["../../src/presenter/tennisPresenter","../../src/view/tennisView"], function(TennisPresenter, TennisView) {

    describe("Tennis Presenter", ()=> {

		let tennisView = new TennisView("#app");
    	let	tennisPresenter = new TennisPresenter(tennisView);

    	afterEach(()=>{
    		tennisPresenter.playerOneScore = 0;
    		tennisPresenter.playerTwoScore = 0;
    	});

		it("should exist on application load", ()=>{

    		expect(tennisPresenter).toBeDefined();
    		
    	});

    	it("should calculate player1 score on click of player1 Win button", ()=>{

			spyOn(tennisView, "updateScore");			
			tennisPresenter.playerOneScore = 30;
			
			tennisPresenter.calculateScore("player1");
			
			expect(tennisView.updateScore).toHaveBeenCalled();
			expect(tennisPresenter.playerOneScore).toEqual(40);
		});

		it("should calculate player2 score on click of player2 Win button", ()=>{

			spyOn(tennisView, "updateScore");			
			tennisPresenter.playerTwoScore = 15;
			
			tennisPresenter.calculateScore("player2");
			
			expect(tennisView.updateScore).toHaveBeenCalled();
			expect(tennisPresenter.playerTwoScore).toEqual(30);
		});

		it("should set winner when the game is not in deuce", ()=>{
			spyOn(tennisView, "displayWinner");
			tennisPresenter.playerOneScore = 30;
			tennisPresenter.playerTwoScore = 40;

			tennisPresenter.calculateScore("player2");

			expect(tennisView.displayWinner).toHaveBeenCalled();
			expect(tennisPresenter.winner).toEqual("player2");

		});

		it("should set game winner when player with advantage wins the ball", ()=>{

			tennisPresenter.playerOneScore = "A";
			tennisPresenter.playerTwoScore = 40;

			tennisPresenter.calculateScore("player1");

			expect(tennisPresenter.winner).toEqual("player1");

		});

		it("should set the game to deuce when player without advantage wins the ball", ()=>{

			tennisPresenter.playerOneScore = "A";
			tennisPresenter.playerTwoScore = 40;

			tennisPresenter.calculateScore("player2");

			expect(tennisPresenter.playerOneScore).toEqual(40);
			expect(tennisPresenter.playerTwoScore).toEqual(40);

		});

		it("should decide winner when player without advantage wins the ball", ()=>{

			tennisPresenter.playerOneScore = "A";
			tennisPresenter.playerTwoScore = 40;

			tennisPresenter.calculateScore("player2");
			tennisPresenter.calculateScore("player2");
			tennisPresenter.calculateScore("player2");

			expect(tennisPresenter.winner).toEqual("player2");

		});
    
    });

});