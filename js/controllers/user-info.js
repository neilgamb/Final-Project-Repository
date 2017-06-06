module.exports = {

    name: 'UserInfoController',
    func: function ($scope, $stateParams, UserService) {

        console.log($stateParams.mealID);
        $scope.user = UserService.getOneUser($stateParams.userID);

        $scope.chefUser = {
            name: 
        }

    },
};