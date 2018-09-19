// JavaScript source code
var routerApp = angular.module('routerApp', ['ui.router']);

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
            .state('product', {
                url: '/product',
                templateUrl: '../views/product/product.view.html',
                controller: 'ProductController'
            })
        //.state('about', {
        //    url: '/about',
        //    templateUrl: '../views/about/about.view.html'
        //})
    });
})(routerApp);