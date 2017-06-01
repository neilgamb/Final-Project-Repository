const app = angular.module('MealApp', ['ui.router']);

const controllers = [
    require('./controllers/home'),
    require('./controllers/cook'),
    require('./controllers/start'),
    require('./controllers/meal-list')
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

