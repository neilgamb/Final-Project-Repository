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
        };
    },
};