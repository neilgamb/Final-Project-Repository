module.exports = {
    name: 'OrderStatusController',
    func: function ($scope, $state, $stateParams, MealService) {

        $scope.orderedMeals = MealService.getOrderedMeals();

        // FOR LATER $scope.completeOrder = function(meal) {

        //     MealService.submitComplete(meal.id).then(function(){

        //         $state.reload();

        //     });
        // };

        $scope.toOrderedMealDetail = function (id) {

            $state.go('orderedmealdetail', {
                mealID: id.mealID,
            });

        };

    },
};

