module.exports = {
    name: 'MealDetailController',
    func: function ($scope, $stateParams, MealService) {

        $scope.meal = MealService.getOneMeal($stateParams.mealID);

        $scope.addOrder = function (order) {

            const newOrder = {
                id: $stateParams.mealID,
                servingCount: $scope.servingCount,
                eta: $scope.eta,
            };

            MealService.postOrder(newOrder);
        };
},

}   