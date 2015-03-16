Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'empty'
});

Router.map(function () {
    this.route('home', {
        path: '/',
        template: 'meetup'
    })
    this.route('blog1', {
        path: '/blog1',
        template: 'meetup',
        waitOn: function () {
            "use strict";
            return [ Meteor.subscribe('posts1')];
        }
    })
});