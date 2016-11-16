// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


//.controller("CollecteurCtrl", function($scope)
//{
//	//alert("test");
//});
//
.controller("HomeCtrl", function(){})
.controller("CollecteurCtrl", function(){})
.controller("InscriptionCtrl", function(){})


.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
      
    .state('home', {
    url:'/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })
  .state('collecteurs', {
    url:'/collecteurs',
    templateUrl: 'templates/collecteurs.html',
    controller:'CollecteurCtrl'
  })
  .state('donneurs', {
    url:'/donneurs',
    templateUrl: 'templates/donneurs.html'
  })
  .state('particuliers', {
    url:'/particuliers',
    templateUrl: 'templates/particuliers.html'
  })
  .state('formCollecteurs', {
    url:'/formCollecteurs',
    templateUrl: 'templates/formCollecteurs.html'
  })
  .state('formDonneurs', {
    url:'/formDonneurs',
    templateUrl: 'templates/formDonneurs.html'
  })
  .state('inscription', {
    url:'/inscription',
    templateUrl: 'templates/inscription.html',
    controller: 'InscriptionCtrl'
  })
  $urlRouterProvider.otherwise('/home')
})
