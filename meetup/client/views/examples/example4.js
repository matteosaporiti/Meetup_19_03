Template.example4.onCreated(function(){
    "use strict";
    Meteor.subscribe('posts4');
});

Template.example4.helpers({
    posts: function(){
        "use strict";
        return Posts.find();
    }
});