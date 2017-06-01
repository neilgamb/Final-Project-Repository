module.exports = {
    name: 'MealService',
    func: function ($http) {

        const availableMeals = [];

        return {

            postMeal(meal) {

                    $http.post('https://thawing-waters-96173.herokuapp.com/new-meal', meal);

                console.log('meal posted');
            },

            getMeals() {
                $http.get('https://thawing-waters-96173.herokuapp.com/all-meals').then(function (response) {
                    // find out what the length of response is (how many meals?)
                    // loop through and push object into availableMeals array
                    console.log(response.data);

                });
            }
        }
    }
}