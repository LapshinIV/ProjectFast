var myApp = angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($stateProvider) {
  $stateProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function ViewController ($scope, $http) {
    $http
        .get('data/flights.json')
        .then(function(response) {
            $scope.flights = response.data;
        });
});