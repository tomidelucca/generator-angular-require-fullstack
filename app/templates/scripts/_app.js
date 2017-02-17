'use strict';
define(['states',
	'services/dependencyResolverFor',
	'i18n/i18nLoader!',
	'angular',
	'uiRouter',
	'bootstrap',
	'angular-translate'],
	function(config, dependencyResolverFor, i18n) {
		var <%= appname %> = angular.module('<%= appname %>', [
			'ui.router',
			'pascalprecht.translate'
		]);
		<%= appname %>
			.config(
				['$controllerProvider',
				'$compileProvider',
				'$filterProvider',
				'$provide',
				'$translateProvider',
				'$stateProvider',
				'$urlRouterProvider',
				function($controllerProvider, $compileProvider, $filterProvider, $provide, $translateProvider, $stateProvider, $urlRouterProvider) {

					<%= appname %>.controller = $controllerProvider.register;
					<%= appname %>.directive = $compileProvider.directive;
					<%= appname %>.filter = $filterProvider.register;
					<%= appname %>.factory = $provide.factory;
					<%= appname %>.service = $provide.service;

					if (config.states !== undefined) {
            angular.forEach(config.states, function(state) {
              $stateProvider.state(state.name, {
                url: state.url,
                templateUrl: state.templateUrl,
                resolve: dependencyResolverFor(['controllers/' + state.controller]),
                controller: state.controller
              });
            });
          }

					if (config.defaultState !== undefined) {
            $urlRouterProvider.otherwise(function($injector, $location) {
              var $state = $injector.get('$state');
              $state.go(config.defaultState);
            });
          }

          $translateProvider.translations('preferredLanguage', i18n);
          $translateProvider.preferredLanguage('preferredLanguage');

				}]);
		return <%= appname %>;
	}
);
