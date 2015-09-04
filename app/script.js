'use strict';

// Declare app level module which depends on views, and components
angular.module('FineNavbar', ['ui.bootstrap','ui.router','ui.navbar'])
    .config( function($stateProvider, $urlRouterProvider) {
        // Voor een URL die niet gematched kon worden, ga naar /homepage
        $urlRouterProvider.otherwise("/home")

        // Definieer de paden:
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "partials/home.html"
            })
            .state('state1', {
                url: "/beheer",
                templateUrl: "partials/beheer.html"
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "partials/state2.html"
            });
    })

    .controller('NavigationController', function($scope) {

        $scope.tree = [{
            name: "States",
            link: "#",
            subtree: [{
                name: "state 1",
                link: "beheer",
                subtree: [{name: "state 1",
                    link: "state1"}]
            }, {
                name: "state 2",
                link: "state2"
            }]
        }, {
            name: "No states",
            link: "#",
            subtree: [{
                name: "no state connected",
                link: "#"
            }]
        }, {
            name: "divider",
            link: "#"

        }, {
            name: "State has not been set up",
            link: "#"
        }, {
            name: "divider",
            link: "#"
        }, {
            name: "Here again no state set up",
            link: "#"
        }];
    });