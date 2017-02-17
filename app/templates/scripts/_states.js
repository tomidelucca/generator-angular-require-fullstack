'use strict';

define([], function() {
    return {
        defaultState: 'home',
        states: {
            home: {
              name: 'home',
              url: '/',
              templateUrl: '/views/home.html',
              controller: 'HomeController'
            }
            /* ===== yeoman hook ===== */
            /* Do not remove these commented lines! Needed for auto-generation */
        }
    };
});
