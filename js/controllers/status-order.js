module.exports = {
    name: 'OrderStatusController',
    func: function ($scope, $state, $stateParams, MealService) {

        $scope.orderedMeals = MealService.getOrderedMeals();

        $scope.toOrderedMealDetail = function (id) {

            $state.go('orderedmealdetail', {
                
                mealID: id.mealID,

            });

        };
    },
};

