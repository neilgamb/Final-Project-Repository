module.exports = {
    name: 'LogOutController',
    func: function ($scope, $state, $stateParams, UserService) {
        $scope.logout = function () {

            // basically this function takes the "enabled" property and sets it false (I think?)
            UserService.attemptLogout();
            $state.go('start');
        };
    },
};