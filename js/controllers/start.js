module.exports = {

    name: 'StartController',
    func: function ($scope, $stateParams, UserService) {

        $scope.login = function(unpw){

            const loginInfo = {
                username: $scope.username,
                password: $scope.password,
            };

            UserService.attemptLogin(loginInfo).then(function(){

                console.log('success');
                $state.go('home')

            }).catch(function(){
                console.log('failure');
            })


        }
        
    },

};