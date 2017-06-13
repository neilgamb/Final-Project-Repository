module.exports = {
    name: 'TokenCounterController',
    func: function ($scope, $stateParams, UserService) {
        
        UserService.numberOfTokens().then(function(tokens){
            $scope.tokenCount = tokens;
        }); 
    
    },
};