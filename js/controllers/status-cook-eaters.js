module.exports = {
    name: 'CookStatusEatersController',
    func: function ($scope, $state, $stateParams, MealService) {

        this.$onInit = function() {
            $scope.eaters = MealService.getEaters(this.meal);
        }
    
    },
};

