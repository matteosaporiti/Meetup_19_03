Meteor.publish('posts4', function() {
    "use strict";
    if(this.userId){
        return Posts.find({});
    }
    else{
        return Posts.find({},{fields: {image: 0}});
    }
});