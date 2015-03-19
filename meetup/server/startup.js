Meteor.startup(function () {
    "use strict";
    console.log('application starting up (server side)');
    if(Posts.find().count() === 0) {
        Posts.insert({
            title: 'Meteor subscription',
            text: 'Clients call Meteor.subscribe to express interest in document collections published by the server. Clients can further filter these collections of documents by calling collection.find(query). ',
            image: 'http://upload.wikimedia.org/wikipedia/en/d/d2/Cranbrook%2C_BC_flag.png',
            order: 0
        });
        Posts.insert({
            title: 'Meteor publications',
            text: 'To publish data to clients, call Meteor.publish on the server with two arguments: the name of the record set, and a publish function that will be called each time a client subscribes to this record set.',
            image: 'http://upload.wikimedia.org/wikipedia/en/4/43/Old_Ottawa_Flag.png',
            order: 1
        });
        Posts.insert({
            title: 'Accounts-ui',
            text: 'accounts-ui: This package allows you to use {{> loginButtons}} in your templates to add an automatically generated UI that will let users log into your app. There are several community alternatives to this package that change the appearance, or you can not use it and use the advanced Accounts methods instead.',
            image: 'http://upload.wikimedia.org/wikipedia/en/d/db/Flag_of_London_Ontario.png',
            order: 2
        });
        Posts.insert({
            title: 'Meteor call',
            text: 'Methods called on the client run asynchronously, so you need to pass a callback in order to observe the result of the call. The callback will be called with two arguments, error and result. The error argument will be null unless an exception was thrown. When an exception is thrown, the error argument is a Meteor.Error instance and the result argument is undefined.',
            image: 'http://upload.wikimedia.org/wikipedia/en/b/b8/Flag_of_Markham.png',
            order: 0
        });
    }
});