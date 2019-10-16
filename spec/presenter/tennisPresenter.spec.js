define(["../../src/presenter/tennisPresenter","../../src/view/tennisView"], function(TennisPresenter, TennisView) {

    describe("Tennis Presenter", ()=> {

		it("should exist on application load", ()=>{

			let tennisView = new TennisView("#app");
    		let	tennisPresenter = new TennisPresenter(tennisView);

    		expect(tennisPresenter).toBeDefined();
    		
    	});
    
    });

});