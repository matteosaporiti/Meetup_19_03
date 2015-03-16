Meteor.publish('posts5', function() {
    "use strict";
    var sub = this;
    var handle = Posts.find().observeChanges({
        added: function (id, fields) {
            fields.text += " added from the publication";
            console.log(id + " added");
            sub.added('posts', id, fields);
        },
        changed: function (id, fields) {
            if(fields.text){
                fields.text += " modified from the publication";
            }
            console.log(id + " changed");
            sub.changed('posts', id, fields);
        },
        removed: function (id) {
            console.log(id + " removed");
            sub.removed('posts', id);
        }
    });

    // mark complete, clean up when stopped
    sub.ready();

    sub.onStop(function () {
        handle.stop();
    });
});