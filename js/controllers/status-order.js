module.exports = {
    name: 'OrderStatusController',
    func: function ($scope, $state, $stateParams, MealService) {
        
        $scope.orderedMeals = MealService.getOrderedMeals();

        $scope.completeOrder = function(meal) {

            console.log(meal.id);

            MealService.submitComplete(meal.id).then(function(){

                $state.reload();

            });
        }
        
    
    },
};

