module.exports = {
    name: 'MealListController',
    func: function ($scope, $stateParams, MealService) {
        console.log('meal list controller works');
        $scope.availableMeals = MealService.getMeals();
    },
};