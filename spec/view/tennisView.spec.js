define(["../../src/view/tennisView"], function(TennisView) {

    describe("Tennis View", ()=> {

    	let tennisView  = null;

    	beforeEach(()=>{ 
    		tennisView  = new TennisView("#app");   		
    		tennisView.$el.html("<!DOCTYPE html><h1>Tennis game</h1><input type='button' id='player1'/><input type='button' id='player2'/><div id='score1'></div><div id='score2'></div><div id='winnerSection'></div><div id='winner'></div>");
    	});

    	afterEach(()=>{
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

    });

});