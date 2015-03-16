Meteor.publish('posts3', function() {
    "use strict";
    return Posts.find({},{fields: {text: 0}});
});