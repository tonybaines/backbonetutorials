// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/users',
  'text!templates/users/list.html'
], function($, _, Backbone, usersCollection, userListTemplate){
  var userListView = Backbone.View.extend({
    el: $("#page"),
    initialize: function(){
      this.collection = usersCollection;
      this.collection = usersCollection.add({ name: "Arthur"});
      this.collection = usersCollection.add({ name: "Ford"});
      this.collection = usersCollection.add({ name: "Trillian"});
      this.collection = usersCollection.add({ name: "Slartibartfast"});
    },
    render: function(){
      var data = {
        users: this.collection.models,
        _: _
      };
      var compiledTemplate = _.template( userListTemplate, data );
      this.el.html( compiledTemplate );
    }
  });
  return new userListView;
});
