(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('MealApp', ['ui.router']);

const controllers = [
    require('./controllers/home'),
    require('./controllers/cook'),
    require('./controllers/start'),
    require('./controllers/meal-list'),
    require('./controllers/meal'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

const mealService = require('./services/meal');
app.factory(mealService.name, mealService.func);

const userService = require('./services/user');
app.factory(userService.name, userService.func);

app.config(function ($stateProvider) {

    $stateProvider.state({
        name: 'start',
        url: '/start',
        component: 'startPage',
    });
    $stateProvider.state({
        name: 'home',
        url: '/home',
        component: 'homePage',
    });
    $stateProvider.state({
        name: 'cook',
        url: '/cook',
        component: 'cookPage',
    });
    $stateProvider.state({
        name: 'cookconfirm',
        url: '/cook-confirm',
        component: 'cookconfirmPage',
    });
    $stateProvider.state({
        name: 'meallist',
        url: '/meal-list',
        component: 'meallistPage',
    });
    $stateProvider.state({
        name: 'mealdetail',
        url: '/meal/:mealID',
        component: 'mealdetailPage',
    });
    $stateProvider.state({
        name: 'eatconfirm',
        url: '/eat-confirm',
        component: 'eatconfirmPage',
    });

});

app.component('startPage', {
    templateUrl: 'templates/start.html',
    controller: 'StartController',
});

app.component('homePage', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController', // not sure what controller to use here
});

app.component('cookPage', {
    templateUrl: 'templates/cook.html',
    controller: 'CookController',
});

app.component('cookconfirmPage', {
    templateUrl: 'templates/cook-confirm.html',
    controller: 'CookController',
});

app.component('meallistPage', {
    templateUrl: 'templates/meal-list.html',
    controller: 'MealListController',
});

app.component('mealdetailPage', {
    templateUrl: 'templates/meal-detail.html',
    controller: 'MealDetailController',
});

app.component('eatconfirmPage', {
    templateUrl: 'templates/eat-confirm.html',
    controller: 'MealDetailController',
});


},{"./controllers/cook":2,"./controllers/home":3,"./controllers/meal":5,"./controllers/meal-list":4,"./controllers/start":6,"./services/meal":7,"./services/user":8}],2:[function(require,module,exports){
module.exports = {
    name: 'CookController',
    func: function ($scope, $stateParams, MealService) {
        
        $scope.add = function(meal){

            const newMeal = {
                name: $scope.meal_name,
                recipe: $scope.recipe_url,
                servingCount: parseInt($scope.servings, 10),
                availableTime: $scope.pickup_time,
                category: $scope.category,
                // add_info: $scope.add_info,
            };

            MealService.postMeal(newMeal);
        }
    },
};
},{}],3:[function(require,module,exports){
module.exports = {
    name: 'HomeController',
    func: function ($scope, $stateParams, MealService) {
        console.log('it worked');
    },
}
},{}],4:[function(require,module,exports){
module.exports = {
    name: 'MealListController',
    func: function ($scope, $stateParams, MealService) {
        $scope.availableMeals = MealService.getMeals();
    
    },
};
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'MealDetailController',
    func: function ($scope, $stateParams, MealService) {

        $scope.meal = MealService.getOneMeal($stateParams.mealID);

        $scope.addOrder = function (order) {

            const newOrder = {
                id: $stateParams.mealID,
                servingCount: $scope.servingCount,
                eta: $scope.eta,
            };

            MealService.postOrder(newOrder);
        };
},

}   
},{}],6:[function(require,module,exports){
module.exports = {

    name: 'StartController',
    func: function ($scope, $stateParams, UserService) {
        console.log('Log-in page works');
    },

};
},{}],7:[function(require,module,exports){
module.exports = {
    name: 'MealService',
    func: function ($http) {


        return {

            postMeal(meal) {

                $http.post('https://thawing-waters-96173.herokuapp.com/new-meal', meal);

            },

            getMeals() {

                const availableMeals = [];

                $http.get('https://thawing-waters-96173.herokuapp.com/all-meals').then(function (response) {

                    console.log(response.data);

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

                for (let i = 0; i < order.servingCount; i++) {
                    // $http.post('tbd', order);
                }
            },
        }
    }
}
},{}],8:[function(require,module,exports){
module.exports = {
    name: 'UserService',
    func: function ($http) {
        console.log('Hello!')
        return {
            // something probably goes here, I just don't know what
        };
    },
}
},{}]},{},[1]);
