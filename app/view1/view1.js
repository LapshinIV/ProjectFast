angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($stateProvider) {
  $stateProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function ViewController ($scope, $http) {
    $http
//       .get('http://localhost:8080/flights')
        .get('https://api.mongolab.com/api/1/databases/macaw/collections/data?apiKey=vGEjG-IUrqXsZWCrB6pzkQ4NVlTZEDmZ')
        .success(function (data) {
            $scope.flights = data;
        });
});