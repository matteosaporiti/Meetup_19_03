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
}