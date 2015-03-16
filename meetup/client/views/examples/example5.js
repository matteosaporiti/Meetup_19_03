Template.example5.created = function(){
    "use strict";
    Meteor.subscribe('posts5');
}

Template.example5.helpers({
    posts: function(){
        "use strict";
        return Posts.find();
    }
});