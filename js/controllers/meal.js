module.exports = {
    name: 'MealDetailController',
    func: function ($scope, $stateParams, MealService) {
        $scope.meal = MealService.getOneMeal($stateParams.mealID);
    },
};