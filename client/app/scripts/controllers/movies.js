'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function (
    $scope,
    Restangular
  ) {
    $scope.movies = Restangular.all('movie').getList().$object;
  });
