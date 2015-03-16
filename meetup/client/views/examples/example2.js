Template.example2.created = function(){
    "use strict";
    Meteor.subscribe('posts2');
    //Meteor.subscribe('posts1');
}

Template.example2.helpers({
    posts: function(){
        "use strict";
        return Posts.find();
    }
});