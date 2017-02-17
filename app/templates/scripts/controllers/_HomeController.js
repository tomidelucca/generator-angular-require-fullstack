'use strict';
define(['<%= appname %>'], function(<%= appname %>) {

	<%= appname %>.controller('HomeController', function($scope) {
		$scope.homePageText = 'This is your homepage';
	});
});
