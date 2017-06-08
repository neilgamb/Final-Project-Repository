var moment = require('moment');
moment().format();


module.exports = {
  name: 'MealDetailController',
  func: function ($scope, $stateParams, MealService) {


    MealService.getMealAddress($stateParams.mealID).then(function (meal) {

      let addressMap = meal.street + " " + meal.city + " " + meal.state + " " + meal.zipcode;

      initMap(addressMap);


      $scope.meal = MealService.getOneMeal($stateParams.mealID);

      $scope.addOrder = function (order) {

        const newOrder = {

          eta: moment($scope.eta.toISOString()),
          id: $stateParams.mealID,
          servingAmt: $scope.servingAmt
        };

        $scope.meal = MealService.getOneMeal($stateParams.mealID);

        $scope.addOrder = function (order) {

          const newOrder = {
            eta: $scope.eta,
            id: $stateParams.mealID,
          };

          MealService.postOrder(newOrder);

        };
      },

    function initMap(addressMap) {

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: { lat: -34.397, lng: 150.644 }
      });

      var geocoder = new google.maps.Geocoder();

      geocodeAddress(geocoder, map, addressMap);
    }

    function geocodeAddress(geocoder, resultsMap, addressMap) {
      var address = addressMap;
      geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
          resultsMap.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  }
}