module.exports = {
    name: 'CookStatusController',
    func: function ($scope, $state, $stateParams, MealService) {
        
        $scope.meals = MealService.getCookedMeals();


    
    },
};

