(function() {
    'use strict';

    var app = angular
        .module('GamingRapApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngTouch',
            'ui.router',
            'infinite-scroll',
            'wu.masonry'
        ]);


    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");
        $stateProvider

        .state('home', {
          url: '^/home',
          templateUrl: 'home/home.html',
          controller:'HomeCtrl',
          title : 'Home',
        })

        .state('about', {
          url: '^/about',
          templateUrl: 'about/about.html',
          title : 'About',
        })

        .state('contact', {
          url: '^/contact',
          templateUrl: 'contact/contact.html',
          title : 'Contact',
        });
    
    });
    

}());
