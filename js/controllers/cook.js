module.exports = {
    name: 'CookController',
    func: function ($scope, $stateParams, MealService) {
        
        $scope.add = function(meal){

            const newMeal = {
                name: $scope.meal_name,
                recipe: $scope.recipe_url,
                servings: parseInt($scope.servings, 10),
                available: $scope.pickup_time,
                cuisine: $scope.category,
                add_info: $scope.add_info,
            };

            MealService.postMeal(newMeal);
        }
    },
};