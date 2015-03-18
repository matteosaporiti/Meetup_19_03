if (Meteor.isClient) {
    Template.layout.helpers({
        isExample1: function() {
            "use strict";
            return document.URL.indexOf('ex1') > -1;
        },
        isExample2: function() {
            "use strict";
            return document.URL.indexOf('ex2') > -1;
        },
        isExample3: function() {
            "use strict";
            return document.URL.indexOf('ex3') > -1;
        },
        isExample4: function() {
            "use strict";
            return document.URL.indexOf('ex4') > -1;
        },
        isExample5: function() {
            "use strict";
            return document.URL.indexOf('ex5') > -1;
        }
    });
    Template.layout.events({
        'submit form': function(e){
            "use strict";
            e.preventDefault();
            Meteor.call('insertNewPost',{
                title: e.target.title.value,
                text: e.target.text.value,
                image: e.target.image.value,
                order: e.target.order.value
            },function(err,res){
                if(err){
                    console.log(err);
                }
            });
        }
    });
}