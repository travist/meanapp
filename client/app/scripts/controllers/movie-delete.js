'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieDeleteCtrl
 * @description
 * # MovieDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('MovieDeleteCtrl', function (
  $scope,
  $routeParams,
  Movie,
  $location
) {
  $scope.movie = Movie.one($routeParams.id).get().$object;
  $scope.deleteMovie = function() {
    $scope.movie.remove().then(function() {
      $location.path('/movies');
    });
  };
  $scope.back = function() {
    $location.path('/movie/' + $routeParams.id);
  };
});
