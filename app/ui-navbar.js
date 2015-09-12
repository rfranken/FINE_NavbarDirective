angular.module('ui.navbar', ['ui.bootstrap', 'template/navbar-ul.html', 'template/navbar-li.html'])

    .directive('tree', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                tree: '='
            },
            templateUrl: 'template/navbar-ul.html'
        };
    })

    .directive('leaf', function ($compile) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'template/navbar-li.html',
            link: function (scope, element, attrs) {
                scope.leaf.isAuthorized = false
                //var rollenVanGebruiker = ["PPB_BEHEER", "ONZIN", "NOGEEN"];
                // Kijk of er een match is tussen de rollen van de gebruiker en de rolle van de menu-optie:
                var rollenVanGebruiker = scope.$parent.$parent.$parent.userRoles
                if (angular.isArray(scope.leaf.roles)) {
                    // Kijk of er een match is tussen de rollen van de gebruiker en die van de menu-optie:
                    angular.forEach(rollenVanGebruiker.data, function(rolGebruiker) {
                        angular.forEach(scope.leaf.roles, function(rolMenuOptie) {
                            if (!scope.leaf.isAuthorized) {
                                if (rolGebruiker === rolMenuOptie) {
                                    scope.leaf.isAuthorized = true;
                                }
                            }
                        });
                    });
                }
                if (!scope.leaf.isAuthorized) {
                    scope.leaf.class='not-authorized'
                }
                if (angular.isArray(scope.leaf.subtree)) {
                    element.append('<tree tree=\"leaf.subtree\"></tree>');
                    var parent = element.parent();
                    var classFound = false;
                    while(parent.length > 0 && !classFound) {
                        if(parent.hasClass('navbar-right')) {
                            classFound = true;
                        }
                        parent = parent.parent();
                    }

                    if(classFound) {
                        element.addClass('dropdown-submenu-right');
                    } else {
                        element.addClass('dropdown-submenu');
                    }

                    $compile(element.contents())(scope);
                }
            }
        };
    });
angular.module("template/navbar-li.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("template/navbar-li.html",
        "<li ng-class=\"{divider: leaf.name == 'divider'}\">\n" +
        "    <a ui-sref=\"{{leaf.link}}\" class=\"{{leaf.class}}\" ng-if=\"leaf.name !== 'divider'\">{{leaf.name}}</a>\n" +
        "</li>");
}]);

angular.module("template/navbar-ul.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("template/navbar-ul.html",
        "<ul class='dropdown-menu'>\n" +
        "    <leaf ng-repeat='leaf in tree' leaf='leaf'></leaf>\n" +
        "</ul>");
}]);
