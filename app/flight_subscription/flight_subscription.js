angular.module('myApp.flight_subscription', ['ngRoute'])

.run(function($http){
    $http.defaults.headers.common.Authorization = 'Basic Zm9vOmJhcg'
})
.config(['$routeProvider', function($stateProvider) {
    $stateProvider.when('/flight_subscription', {
        templateUrl: 'flight_subscription/flight_subscription.html',
        controller: 'flight_subscriptionCtrl'
    });
}])

.controller('flight_subscriptionCtrl', function ViewController ($scope, $http) {
    $scope.change=function(){
        $http.get('http://localhost:8080/flight_subscriptions/'+ $scope.flight)
        .success(function(data){
            $scope.flights = data;
        });
    };
        $http
        .get('http://localhost:8080/carriers')
//      .get('./data/Flights_Full.json')
//      .get('https://api.mongolab.com/api/1/databases/macaw/collections/data?apiKey=vGEjG-IUrqXsZWCrB6pzkQ4NVlTZEDmZ')
        .success(function (data) {
            $scope.flights2 = data;
        });
});
