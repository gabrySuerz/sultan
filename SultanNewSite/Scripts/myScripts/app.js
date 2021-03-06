﻿//app.js keeps the configurations of

var site = angular.module('sultanSite', ['ui.router', 'pascalprecht.translate', 'ngParallax'])

//configuring the router of the site
site.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'htmlPages/home.html',
            controller: 'homeCtrl'
        })
        .state('products', {
            url: '/products',
            templateUrl: 'htmlPages/products.html',
            controller: 'productsCtrl'
        })
        .state('about-us', {
            url: '/about-us',
            templateUrl: 'htmlPages/about-us.html',
            controller: 'showMoreCtrl'
        })
        .state('works', {
            url: '/ourWorks',
            templateUrl: 'htmlPages/works.html',
            controller: 'worksCtrl'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'htmlPages/news.html',
            controller: 'newsCtrl'
        })
        .state('contacts', {
            url: '/contacts',
            templateUrl: 'htmlPages/contacts.html',
            controller: 'contactsCtrl'
        })
})

//use the translateProvider to pick Json in any language
//and set the default
site.config(function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: '../../StringsLanguage/string-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('it_IT')
})

var site2 = angular.module('insertSite', ['ngFileUpload']);

site2.filter('translateFilter', function ($translate) {
    return function (input, param) {
        if (!param) {
            return input;
        }
        var searchVal = param.key.toLowerCase();
        var result = [];
        angular.forEach(input, function (value) {
            var translated = $translate(value.key);
            if (translated.toLowerCase().indexOf(searchVal) !== -1) {
                result.push(value);
            }
        });
        return result;
    };
});