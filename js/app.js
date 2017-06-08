const app = angular.module('MealApp', ['ui.router']);

const controllers = [
    require('./controllers/home'),
    require('./controllers/cook'),
    require('./controllers/start'),
    require('./controllers/meal-list'),
    require('./controllers/meal'),
    require('./controllers/cook-confirm'),
    require('./controllers/eat-confirm'),
    require('./controllers/sign-up'),
];

for (let i = 0; i < controllers.length; i++) {
    app.controller(controllers[i].name, controllers[i].func);
}

const mealService = require('./services/meal');
app.factory(mealService.name, mealService.func);

const userService = require('./services/user');
app.factory(userService.name, userService.func);

app.config(function ($stateProvider, $httpProvider) {
    // Added by Luke: 'always send cookie data with ajax requests'
    // Necessary to make authenticated (logged in) requests after
    // you're logged in from localhost.
    $httpProvider.defaults.withCredentials = true;

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
    $stateProvider.state({
        name: 'signup',
        url: '/sign-up',
        component: 'signupPage',
    });
    $stateProvider.state({
        name: 'signupsuccess',
        url: '/sign-up-success',
        component: 'signupSuccessPage',
    });
    $stateProvider.state({
        name: 'userinfo',
        url: '/user/:userID',
        component: 'userInfo',
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
    controller: 'CookConfirmController',
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
    controller: 'EatConfirmController',
});

app.component('signupPage', {
    templateUrl: 'templates/sign-up.html',
    controller: 'SignUpController',
});

app.component('signupSuccessPage', {
    templateUrl: 'templates/sign-up-success.html',
});

app.component('userInfo', {
    templateUrl: 'templates/user-info.html',
    controller: 'MealDetailController',
    bindings: {
        target: '<' // it's either greater than or less than, try both
    }
});


