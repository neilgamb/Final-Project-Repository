module.exports = {
    name: 'CookStatusController',
    func: function ($scope, $stateParams, MealService) {
        
        $scope.cookedMeals = MealService.getCookedMeals();
    
    },
};