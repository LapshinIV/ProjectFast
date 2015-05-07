angular.module('myApp.flight_subscription', ['ngRoute'])


.config(['$routeProvider', function($stateProvider) {
  $stateProvider.when('/flight_subscription', {
    templateUrl: 'flight_subscription/flight_subscription.html',
    controller: 'flight_subscriptionCtrl'
  });
}])

.filter('unique', function() {
    return function(collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function(item) {
            var key = item[keyname];
            if(keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
})
.controller('flight_subscriptionCtrl', function ViewController ($scope, $http) {
    $scope.change=function(){
        $http.get('http://localhost:8080/flights_subscriptions/'+ $scope.flight.carrier_code)
        .success(function(data){
            $scope.flights = data;
        });
    };
        $http
        .get('http://localhost:8080/flights_subscriptions')
//      .get('https://api.mongolab.com/api/1/databases/macaw/collections/data?apiKey=vGEjG-IUrqXsZWCrB6pzkQ4NVlTZEDmZ')
        .success(function (data) {
            $scope.flights = data;
            $scope.flights2 = data;
        });
});
