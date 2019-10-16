define(["../../src/view/tennisView"], function(TennisView) {

    describe("Tennis View", ()=> {

    	let tennisView  = null;

    	beforeEach(()=>{ 
    		tennisView  = new TennisView("#app");   		
    		tennisView.$el.html("<!DOCTYPE html><h1>Tennis game</h1><input type='button' id='player1'/><input type='button' id='player2'/><div id='score1'></div><div id='score2'></div><div id='winnerSection'></div><div id='winner'></div>");
    	});

    	afterEach(()=>{
            tennisView.tennisPresenter.playerOneScore = 0;
            tennisView.tennisPresenter.playerTwoScore = 0;
    		tennisView = null;
    	});

    	it("should exist on application load", ()=>{

    		expect(tennisView).toBeDefined();

    	});

    	it("should render method return tennisView on application load", ()=>{
   			tennisView.render();
    		
    		expect(tennisView.render()).toEqual(tennisView);
    	});

        it("should set player1 score when player1 Win button is clicked", ()=>{
            spyOn(tennisView, "updateScore");
            
            tennisView.$el.find("#player1").trigger("click");
            
            expect(tennisView.updateScore).toHaveBeenCalledWith("#score1", 15);
            expect(tennisView.$el.find("#score1").text()).toEqual("15");            
        });

        it("should set player2 score when player2 Win button is clicked", ()=>{
            spyOn(tennisView, "updateScore");
            
            tennisView.$el.find("#player2").trigger("click");
            tennisView.$el.find("#player2").trigger("click");
            
            expect(tennisView.updateScore).toHaveBeenCalledWith("#score2", 30);
            expect(tennisView.$el.find("#score2").text()).toEqual("30");            
        }); 

        it("should display winner section when winner is decided", ()=>{
            spyOn(tennisView, "displayWinner");

            tennisView.$el.find("#player1").trigger("click");
            tennisView.$el.find("#player1").trigger("click");
            tennisView.$el.find("#player1").trigger("click");
            tennisView.$el.find("#player1").trigger("click");

            expect(tennisView.displayWinner).toHaveBeenCalledWith("player1");           
            expect(tennisView.$el.find("#winnerSection").is(":hidden")).toEqual(false);
            expect(tennisView.$el.find("#winner").text()).toEqual("player1");

        });

    });

});