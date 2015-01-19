'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieViewCtrl
 * @description
 * # MovieViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('MovieViewCtrl', function ($scope, $routeParams, MovieRestangular) {
  $scope.viewMovie = true;
  $scope.movie = MovieRestangular.one('movie', $routeParams.id).get().$object;
});
