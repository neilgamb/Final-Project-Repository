module.exports = {
    name: 'EatConfirmController',
    func: function ($scope, $stateParams, MealService) {

        $scope.confirmedOrder = MealService.getLastOrder();

    },

}

