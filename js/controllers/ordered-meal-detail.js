module.exports = {
  name: 'OrderedMealDetailController',
  func: function ($scope, $state, $stateParams, MealService, UserService) {

    MealService.getMealAddress($stateParams.mealID).then(function (meal) {


      let addressMap = meal.street + " " + meal.city + " " + meal.state + " " + meal.zipcode;

      initMap(addressMap);

      $scope.meal = MealService.getOneMeal($stateParams.mealID);

      $scope.stars = null;

      $scope.rating = function($event){
        $scope.stars = $event.rating;
      }

      $scope.submitRating = function () {

        console.log($scope.stars);
        console.log($scope.meal.user.id);

        UserService.rateUser($scope.stars, $scope.meal.user.id);

      };

      $scope.completeOrder = function (id) {

        MealService.submitComplete($stateParams.mealID);

      };

    });

  },
};


function initMap(addressMap) {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
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
};






