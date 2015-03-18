Posts = new Mongo.Collection("posts");

Meteor.methods({
    insertNewPost: function(post){
        "use strict";
        /*
         Include some kind of validation in a real project
         */
        Posts.insert(post, function(err,res){
            if(err){
                console.log(err);
            }
            else{
                console.log('inserted new post');
                console.log(post);
            }
        });
    }
});