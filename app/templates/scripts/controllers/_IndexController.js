'use strict';
define(['<%= appname %>'], function(<%= appname %>) {

	<%= appname %>.controller('IndexController', function($scope) {
		$scope.welcomeText = 'Welcome to your <%= appname %> page';
	});
});
