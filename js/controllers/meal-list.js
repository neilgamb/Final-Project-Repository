module.exports = {
    name: 'MealListController',
    func: function ($scope, $stateParams, MealService) {
        $scope.availableMeals = MealService.getMeals();
    },
};