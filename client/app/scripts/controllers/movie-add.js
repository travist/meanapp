'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MovieAddCtrl
 * @description
 * # MovieAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MovieAddCtrl', function (
    $scope,
    Restangular,
    $location
  ) {
    $scope.movie = {};
    $scope.saveMovie = function() {
      Restangular.all('movie').post($scope.movie).then(function() {
        $location.path('/movies');
      });
    };
  });
