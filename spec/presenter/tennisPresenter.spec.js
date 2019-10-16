define(["../../src/presenter/tennisPresenter","../../src/view/tennisView"], function(TennisPresenter, TennisView) {

    describe("Tennis Presenter", ()=> {

		let tennisView = new TennisView("#app");
    	let	tennisPresenter = new TennisPresenter(tennisView);

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
    
    });

});