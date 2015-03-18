Template.example1.onCreated(function(){
    "use strict";
    Meteor.subscribe('posts1');
});

Template.example1.helpers({
    posts: function(){
        "use strict";
        return Posts.find();
    }
});