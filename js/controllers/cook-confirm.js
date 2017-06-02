module.exports = {
    name: 'CookConfirmController',
    func: function ($scope, $stateParams, MealService) {

        $scope.confirmedMeal = MealService.getLastMeal();
        
    },
};