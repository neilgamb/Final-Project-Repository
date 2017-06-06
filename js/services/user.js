module.exports = {
    name: 'UserService',
    func: function ($http) {

        

        return {

            createUser(user) {

                return $http.post('https://thawing-waters-96173.herokuapp.com/new-user', user);

            },

            getOneUser(userID) {
                let currentChef = {};
                $http.get('https://thawing-waters-96173.herokuapp.com/select-user/' + userID).then(function (response) {
                    console.log(response.data);
                    return user;
                });
            },
        };
    },
};