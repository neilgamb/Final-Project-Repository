module.exports = {

    name: 'SignUpController',
    func: function ($scope, $state, $stateParams, UserService) {

        $scope.add = function(user){
            
            const newUser = {
                username: $scope.username,
                password: $scope.password,
                passwordConfirm: $scope.passwordConfirm,
                phone: $scope.phone,
            };

            UserService.createUser(newUser).then(function(){

                console.log('success');
                $state.go('signupsuccess')

            }).catch(function () {
                
                console.log('failure');
                $scope.invalid = true;

                });
        };
    },
}