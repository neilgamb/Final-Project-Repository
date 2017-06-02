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

                    console.log(response.data);

                    for (let i = 0; i < response.data.length; i++) {
                        availableMeals.push(response.data[i]);
                    };

                });

                return availableMeals;
            },

            getOneMeal(mealID){

                const meal = {
                    name: '',
                    recipe: '',
                    servingCount: null,
                    availableTime: '',
                    category: '',
                };

                $http.get('https://thawing-waters-96173.herokuapp.com/select-meal/' + mealID).then(function (response) {

                    meal.name = response.data.name;
                    meal.recipe = response.data.recipe;
                    meal.servingCount = response.data.servingCount;
                    meal.availableTime = response.data.availableTime;
                    meal.category = response.data.category;

                });

                return meal;
            },
        }
    }
}