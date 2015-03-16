Meteor.startup(function () {
    if(Posts.find().count() === 0) {
        Posts.insert({
            title: 'title-1',
            text: 'text-1',
            image: 'http://upload.wikimedia.org/wikipedia/en/d/d2/Cranbrook%2C_BC_flag.png',
            order: 0
        });
        Posts.insert({
            title: 'title-2',
            text: 'text-2',
            image: 'http://upload.wikimedia.org/wikipedia/en/4/43/Old_Ottawa_Flag.png',
            order: 1
        });
        Posts.insert({
            title: 'title-3',
            text: 'text-3',
            image: 'http://upload.wikimedia.org/wikipedia/en/d/db/Flag_of_London_Ontario.png',
            order: 2
        });
        Posts.insert({
            title: 'title-4',
            text: 'text-4',
            image: 'http://upload.wikimedia.org/wikipedia/en/b/b8/Flag_of_Markham.png',
            order: 0
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