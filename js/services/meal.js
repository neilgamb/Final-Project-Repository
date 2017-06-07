var moment = require('moment');
moment().format();

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
                    street: '',
                    city: '',
                    state: '',
                    zipcode: '',
                    add_info: '',
                };

                $http.get('https://thawing-waters-96173.herokuapp.com/select-meal/' + mealID).then(function (response) {

                    meal.name = response.data.name;
                    meal.recipe = response.data.recipe;
                    meal.servingCount = response.data.servingCount;
                    meal.availableTime = moment(response.data.availableTime).format('h:mmA');
                    meal.category = response.data.category;
                    meal.street = response.data.street;
                    meal.city = response.data.city;
                    meal.state = response.data.state;
                    meal.zipcode = response.data.zipcode;
                    meal.add_info = response.data.add_info;
                });

                return meal;
            },

            getMealAddress(mealID) {

                const meal = {
                    street: '',
                    city: '',
                    state: '',
                    zipcode: '',
                };

                return $http.get('https://thawing-waters-96173.herokuapp.com/select-meal/' + mealID).then(function (response) {

                    meal.street = response.data.street;
                    meal.city = response.data.city;
                    meal.state = response.data.state;
                    meal.zipcode = response.data.zipcode;

                    return meal;
                });

                // return meal;
            },

            postOrder(order) {

                    $http.put('https://thawing-waters-96173.herokuapp.com/reserve-serving/' + order.id, order).then(function (response) {

                        angular.copy(response.data, lastOrder);

                    });
            },

            getLastOrder(){

                return lastOrder;

            },
        }
    }
}