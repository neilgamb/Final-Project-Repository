module.exports = {
    name: 'UserService',
    func: function ($http, $sce) {

        return {

            createUser(user) {

                return $http.post('https://thawing-waters-96173.herokuapp.com/new-user', user);

            },

            attemptLogin(unpw) {
                return $http.post('https://thawing-waters-96173.herokuapp.com/login', unpw, {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    transformRequest: function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                });
            },
          
            attemptLogout(){
                return $http.get('https://thawing-waters-96173.herokuapp.com/logout');
            },

            numberOfTokens(userID) {
                let tokens = 0;
                // write a function that returns the number of tokens
                $http.get('https://thawing-waters-96173.herokuapp.com/select-user/' + userID).then(function(response) {
                    
                    // in here put the function that returns tokens = user.token; 
                });
                // Steps: I think this is the right GET request, but if it's not, make sure you are
                // GET-ing the right user object, return the number of tokens as a function of that response;
                
                
            },
        };
    },
};