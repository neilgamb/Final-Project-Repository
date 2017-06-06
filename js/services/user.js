module.exports = {
    name: 'UserService',
    func: function ($http) {

        return {

            createUser(user) {

                return $http.post('https://thawing-waters-96173.herokuapp.com/new-user', user);

            },

            designateChef() {

            },

        };
    },
}