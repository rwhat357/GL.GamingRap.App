(function() {
    'use strict';

    var app = angular
        .module('GamingRapApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            'ngRoute',
            'infinite-scroll',
            'wu.masonry'
        ]);


    app.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
            when('/home', {
                templateUrl: 'home/home.html'
            }).
            when('/about', {
                templateUrl: 'about/about.html',
                controller: 'AboutCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
        }
    ]);




}());
