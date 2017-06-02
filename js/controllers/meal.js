module.exports = {
    name: 'MealDetailController',
    func: function ($scope, $stateParams, MealService) {

        $scope.meal = MealService.getOneMeal($stateParams.mealID);

        $scope.addOrder = function (order) {

            const newOrder = {
                eta: $scope.eta,
                id: $stateParams.mealID
            };

            MealService.postOrder(newOrder);
        };

},

}   