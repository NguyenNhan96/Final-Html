// JavaScript source code
var routerApp = angular.module('routerApp', ['ui.router', 'ui.bootstrap']);

(function (app) {
    "use strict";
    app.config(function ($stateProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '../views/home/home.view.html'
            })
            .state('login', {
                url: '/login',
                templateUrl: '../login.html',
                controller: 'LoginController'
            })
            .state('about', {
                url: '/about',
                templateUrl: '../views/about/about.view.html',
                controller: 'AboutController'
            })
            .state('customer', {
                url: '/customer',
                templateUrl: '../views/customer/customer.view.html',
                controller: 'CustomerController'
            })
            .state('export', {
                url: '/export',
                templateUrl: '../views/export/export.view.html',
                controller: 'ExportController'
            })
            .state('import', {
                url: '/import',
                templateUrl: '../views/import/import.view.html',
                controller: 'ImportController'
            })
            .state('materials', {
                url: '/materials',
                templateUrl: '../views/materials/materials.view.html',
                controller: 'MaterialsController'
            })
            .state('producer', {
                url: '/producer',
                templateUrl: '../views/producer/producer.view.html',
                controller: 'ProducerController'
            })
            .state('product', {
                url: '/product',
                templateUrl: '../views/product/product.view.html',
                controller: 'ProductController'
            })
            .state('supply-house', {
                url: '/supply-house',
                templateUrl: '../views/supply-house/supply-house.view.html',
                controller: 'SupplyHouseController'
            })
            .state('user', {
                url: '/user',
                templateUrl: '../views/user/user.view.html',
                controller: 'UserController'
            })

    });
        //.constant('Constants', Constants);
})(routerApp);