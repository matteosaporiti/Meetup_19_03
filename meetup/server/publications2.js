Meteor.publish('posts2', function() {
    "use strict";
    return Posts.find({order : 1});
});