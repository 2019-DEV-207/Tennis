define(['backbone'], function(Backbone) {

    "use strict";

    return Backbone.View.extend({

        initialize: function(tennisView) {
       
			this.tennisView = tennisView;
        }

    });

});