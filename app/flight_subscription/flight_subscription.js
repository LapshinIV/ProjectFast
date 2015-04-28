angular.module('myApp.flight_subscription', ['ngRoute'])

.config(['$routeProvider', function($stateProvider) {
  $stateProvider.when('/flight_subscription', {
    templateUrl: 'flight_subscription/flight_subscription.html',
    controller: 'flight_subscriptionCtrl'
  });
}])

.controller('flight_subscriptionCtrl', function ViewController ($scope, $http) {
    $http
//      .get('http://localhost:8080/flight_subscription')
        .get('https://api.mongolab.com/api/1/databases/macaw/collections/data?apiKey=vGEjG-IUrqXsZWCrB6pzkQ4NVlTZEDmZ')
        .success(function (data) {
            $scope.flights = data;
        });
});