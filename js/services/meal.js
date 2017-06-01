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
                    for (let i = 0; i < response.length; i++) {
                        availableMeals.push(response.data); // I feel like this should work but it doesn't seem to, might
                                                            // be something in the template/angular stuff. I'll talk to Neilson.
                    };

                });
            },
        }
    }
}