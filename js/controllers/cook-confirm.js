module.exports = {
    name: 'CookConfirmController',
    func: function ($scope, $stateParams, MealService) {

        console.log('hello');

        $scope.confirmedMeal = MealService.getLastMeal();
        
    },
};