module.exports = {
    name: 'UserService',
    func: function ($http) {

        return {

            createUser(user) {

                return $http.post('https://thawing-waters-96173.herokuapp.com/new-user', user);

            },

            attemptLogin(unpw){
                
                return $http.post({
                    url: 'url',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    transformRequest: function(obj) {
                        var str = [];
                        for(var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    }, 
                    unpw
                })
            },

        };
    },
}