module.exports = {

    name: 'SignUpController',
    func: function ($scope, $stateParams, UserService) {

        console.log('Sign up page works');
        $scope.addUser() = function (user) {
            const newUser = {
                username: $scope.username,
                password: $scope.password,
                contact_number: $scope.contact_number,
            };
            UserService.addUser(newUser);
        };
    },
}