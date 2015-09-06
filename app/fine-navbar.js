'use strict';

// Declare app level module which depends on views, and components
angular.module('fine.navbar', ['ui.bootstrap','ui.router','ui.navbar'])
    .config( function($stateProvider, $urlRouterProvider) {
        // Voor een URL die niet gematched kon worden, ga naar /homepage
        $urlRouterProvider.otherwise("/home")

        // Definieer de paden voor de FINE CRM boom:
        $stateProvider
            // Deze zijn fixed en onafhankelijk van de rechten van de gebruiker
            .state('home', {
                url: "/home",
                templateUrl: "partials/fineApplicationData.html",
                controller: "AppInfoController"
            })
            .state('beheer', {
                url: "/beheer",
                templateUrl: "partials/beheer.html"

            })
            .state('connections', {
                url: "/connection",
                templateUrl: "partials/connection.html"
            })
            .state('makeCollectiveContract', {
                url: "/makecollectivecontract",
                templateUrl: "partials/collectivecontract.html?mode=NIEUW"
            })
            .state('makeContract', {
                url: "/makeContract",
                templateUrl: "partials/makeContract.html"
            })
            .state('searchContract', {
                url: "/makeContract",
                templateUrl: "partials/searchContract.html"
            })
            .state('viewInvoice', {
                url: "/viewInvoice",
                templateUrl: "partials/viewInvoice.html"
            })
            .state('creditInvoice', {
                url: "/creditInvoice",
                templateUrl: "partials/creditInvoice.html"
            })
            .state('meterReading', {
                url: "/meterReading"
            })
            // Dit is de default
            .state('otherwise', {
                url: "*path",
                templateUrl: "partials/home.html"
            })
    })

    .controller('NavigationController', function($scope) {
        // Definieer de trees onder het hoofdemenu. Dit zijn er op dit moment dus de volgende:
        // - FINE CRM    : treeFineCrm
        // - FINE Billing: treeFineBilling
        // - Beheer      : treeBeheer
        // - Mijn Account: treeMijnAccount
        //
        // Deze zijn afhankelijk van de rechten van de gebruiker die het menu oproept.
        // Onderstaand zou dus uit een database met rechten gehaald kunnen/moeten worden.
        $scope.treeFineCrm = [
            {
                name: "Aansluitingen",
                link: "connections"
            }
            ,
            {
                name: "Contracten",
                link: "#",
                subtree: [{
                    name: "Maak een contract",
                    link: "Contract",
                    subtree: [{ name: "Gewoon Contract",
                                link: "makeContract"
                              },
                              { name: "Verzamel Contract",
                                link: "makeCollectiveContract"
                              }
                    ]
                }
                ,
                    {
                    name: "Zoek Contract",
                    link: "searchContract"
                }]
            }
            ,
            {
                name: "divider",
                link: "#"
            }
            ,
            {
                name: "Facturen",
                link: "#",
                subtree: [
                {
                    name: "Factuur bekijken",
                    link: "viewInvoice"
                }
                ,
                {
                    name: "Factuur crediteren",
                    link: "creditInvoice"
                }
                ,
                {
                    name: "Factuur Run",
                    link: "invoiceRun"
                }
                ]
            }
            ,
            {
                name: "divider",
                link: "#"
            }
            ,
            {
                name: "Meterstand Invoeren",
                link: "meterReading"
            }
        ];

        $scope.treeFineBilling = [
            {
                name: "Menukeuze 1",
                link: "fineBillingMenuChoice1"
            }
            ,
            {
                name: "Menukeuze 2",
                link: "fineBillingMenuChoice2"
            }
            ,
            {
                name: "Menukeuze 3",
                link: "fineBillingMenuChoice3"
            }
        ];

        $scope.treeBeheer = [
            {
                name: "Menukeuze 1",
                link: "beheerMenuChoice1"
            }
            ,
            {
                name: "Menukeuze 2",
                link: "beheerMenuChoice2"
            }
            ,
            {
                name: "Menukeuze 3",
                link: "beheerMenuChoice3"
            }
        ];

        $scope.treeMijnAccount = [
            {
                name: "Wachtwoord Veranderen",
                link: "changePasswordChoice1"
            }
            ,
            {
                name: "Instellingen",
                link: "myAccountMenuChoice2"
            }
            ,
            {
                name: "Menukeuze 3",
                link: "myAccountMenuChoice2"
            }
        ];

    })

// Controller om metadata over de FINE applicatie op te halen.
// Voorlopig alleen laatste release. Deze moet uiteraard uit de database worden gehaald:
.controller('AppInfoController', function($scope,$location) {
    $scope.lastRelease = 'Release_2.0.304a_FINE_FINEONTW_2015-09-03-08_22_41'
});