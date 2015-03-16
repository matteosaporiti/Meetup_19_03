Meteor.startup(function () {
    if(Posts.find().count() === 0) {
        Posts.insert({
            title: 'title-1',
            text: 'text-1',
            image: 'image-1'
        });
        Posts.insert({
            title: 'title-2',
            text: 'text-2',
            image: 'image-2'
        });
        Posts.insert({
            title: 'title-3',
            text: 'text-3',
            image: 'image-3'
        });
    }
    if(Comments.find().count() === 0) {
        Comments.insert({
            title: 'title-1',
            text: 'text-1'
        });
        Comments.insert({
            title: 'title-2',
            text: 'text-2'
        });
        Comments.insert({
            title: 'title-3',
            text: 'text-3'
        });
    }
});