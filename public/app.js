(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const app = angular.module('MealApp', ['ui.router']);

const controllers = [
    require('./controllers/home'),
    require('./controllers/cook'),
    require('./controllers/start'),
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
    controller: 'CookController',
});


},{"./controllers/cook":2,"./controllers/home":3,"./controllers/start":4,"./services/meal":5,"./services/user":6}],2:[function(require,module,exports){
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

    name: 'StartController',
    func: function ($scope, $stateParams, UserService) {
        console.log('Log-in page works');
    },

};
},{}],5:[function(require,module,exports){
module.exports = {
    name: 'MealService',
    func: function ($http) {

        const availableMeals = [];

        return {

            postMeal(meal) {

                for(let i = 0; i < meal.servings; i++){

                    $http.post('keiths heroku url', meal);
                }

            }
        }
    }
}
},{}],6:[function(require,module,exports){
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
