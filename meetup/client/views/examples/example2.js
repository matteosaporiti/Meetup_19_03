Template.example2.onCreated(function(){
    "use strict";
    Meteor.subscribe('posts2');
    //Meteor.subscribe('posts1');
});

Template.example2.helpers({
    posts: function(){
        "use strict";
        return Posts.find();
        //Posts.find({order : 1});
    }
});