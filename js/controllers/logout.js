module.exports = {
    name: 'LogOutController',
    func: function ($scope, $state, $stateParams, UserService) {
        $scope.logout = function () {

            
            UserService.attemptLogout();
            $state.go('start');
        };
    },
};