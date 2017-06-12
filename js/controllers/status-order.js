module.exports = {
    name: 'OrderStatusController',
    func: function ($scope, $stateParams, MealService) {
        
        $scope.orderedMeals = MealService.getOrderedMeals();
    
    },
};