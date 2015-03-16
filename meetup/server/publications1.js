Meteor.publish('posts1', function() {
    "use strict";
    return Posts.find({});
});