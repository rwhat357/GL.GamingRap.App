(function() {
    'use strict';

    var app = angular
        .module('GamingRapApp', 
            [
                'ngAnimate',
                'ngCookies',
                'ngResource',
                'ngSanitize',
                'ngTouch',
                'ui.router',
                'wu.masonry',
                'infinite-scroll'
            ]);


    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/home");
        $stateProvider

        .state('home', {
          url: '^/home',
          templateUrl: 'home/home.html',
          controller:'HomeCtrl as vm',
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
