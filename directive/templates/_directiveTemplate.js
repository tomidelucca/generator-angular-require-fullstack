'use strict';
define(['<%= appname %>'], function(<%= appname %>) {

    <%= appname %>.directive('<%= directiveName %>', function() {
        return {
            restrict: 'E',
            template: '<span>Sample</span>'
        };
    });

});
