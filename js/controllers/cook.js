module.exports = {
    name: 'CookController',
    func: function ($scope, $stateParams, MealService) {
        
        $scope.add = function(meal){
            MealService.postMeal();
            console.log('meal added');
        }
    },
};