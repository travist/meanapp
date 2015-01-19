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
    MovieRestangular,
    $location
  ) {
    $scope.movie = MovieRestangular.one('movie', $routeParams.id).get().$object;
    $scope.deleteMovie = function() {
      $scope.movie.remove().then(function() {
        $location.path('/movies');
      });
    };
    $scope.back = function() {
      $location.path('/movie/' + $routeParams.id);
    };
  });
