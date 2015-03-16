Template.example3.created = function(){
    "use strict";
    Meteor.subscribe('posts3');
}

Template.example3.helpers({
    posts: function(){
        "use strict";
        return Posts.find();
    }
});