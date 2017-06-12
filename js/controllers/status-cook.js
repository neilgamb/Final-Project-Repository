module.exports = {
    name: 'CookStatusController',
    func: function ($scope, $stateParams, MealService) {
        
        $scope.people = MealService.getCookedMeals();
    
    },
};

