module.exports = {
    name: 'UserService',
    func: function ($http) {

        let currentChef = {};

        return {

            createUser(user) {

                return $http.post('https://thawing-waters-96173.herokuapp.com/new-user', user);

            },

            getOneUser(userID) {
                $http.get('https://thawing-waters-96173.herokuapp.com/select-user/' + userID).then(function (response) {
                    console.log(response.data);
                    return user;
                });
            },
        };
    },
};