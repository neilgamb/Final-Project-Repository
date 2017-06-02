module.exports = {
    name: 'MealService',
    func: function ($http) {

        let lastMeal = {};
        let lastOrder = {};

        return {

            postMeal(meal) {

                $http.post('https://thawing-waters-96173.herokuapp.com/new-meal', meal).then(function (response) {

                    angular.copy(response.data, lastMeal);

                });

            },

            getLastMeal() {

                return lastMeal;

            },

            getMeals() {

                const availableMeals = [];

                $http.get('https://thawing-waters-96173.herokuapp.com/all-meals').then(function (response) {

                    for (let i = 0; i < response.data.length; i++) {
                        availableMeals.push(response.data[i]);
                    };

                });

                return availableMeals;
            },

            getOneMeal(mealID) {

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

            postOrder(order) {

                console.log(order.id);


                    $http.put('https://thawing-waters-96173.herokuapp.com/reserve-serving/' + order.id, order).then(function (response) {

                        angular.copy(response.data, lastOrder);
                        console.log(lastOrder);

                    });
            },

            getLastOrder(){

                return lastOrder;

            },
        }
    }
}