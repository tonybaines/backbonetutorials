define([
  'jquery',
  'underscore',
  'backbone',
  'models/user'
], function($, _, Backbone, usersModel){
  var usersCollection = Backbone.Collection.extend({
    model: usersModel,
    initialize: function(){

    }

  });

  return new usersCollection;
});
