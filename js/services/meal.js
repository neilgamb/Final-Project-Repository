module.exports = {
    name: 'MealService',
    func: function ($http) {

        const availableMeals = [];

        return {

            postMeal(meal) {

                // for (let i = 0; i < meal.servings; i++) {

                //     availableMeals.push(meal);
                // }

                // console.log(availableMeals); <== this is the old code 

                for (let i = 0; i < meal.servings; i++) {

                    $http.post('https://thawing-waters-96173.herokuapp.com/', meal);
                }
            },

            getMeals() {
                $http.get('get request url').then(function (response) {
                    // find out what the length of response is (how many meals?)
                    // loop through and push object into availableMeals array

                });
            }
        }
    }
}