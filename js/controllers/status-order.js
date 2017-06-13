module.exports = {
    name: 'OrderStatusController',
    func: function ($scope, $stateParams, MealService) {
        
        $scope.orderedMeals = MealService.getOrderedMeals();
    
    },
};


// for later:

        // $scope.completeCook = function(person) {

        //     console.log(person.meal.id);

        //     MealService.submitComplete(person.meal.id).then(function(){

        //         $state.reload();

        //     });
        // }