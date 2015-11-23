// Create app
angular.module('myApp',['ui.router', 'firebase'])
//angular.module('myApp.firebase', ['firebase'])
//angular.module('myApp.router', ['ui.router'])
// Configure app
// Config route provider
.config(function($stateProvider) {
    $stateProvider
        .state('home', {
            url:'/',
            templateUrl: 'templates/Landing.html',
            controller: 'HomeController',
        })
        // Configure states for "content" and "about"
        .state('content', {
            url:'/content',
            templateUrl: 'templates/content.html',
            controller: 'PortfolioController',
        })
        .state('about', {
            url:'/about',
            templateUrl: 'templates/about.html',
            controller: 'ProfileController',
        })
    })


// Landing page controller: define $scope.number as a number
.controller('HomeController', function($scope){
	$scope.title = "James Lee's Portfolio"
	$scope.introduction = "This is a portfolio website for INFO343. The portfolio contains challenges that are completed during Fall 2015. Please email me if you have any questions."
})

// About page controller: define $scope.about as a string
.controller('ProfileController', function($scope){
	$scope.DoB = "Jul 5, 1990"
	$scope.Name = "James Lee"
	$scope.Email = "lee.james1990@gmail.com"
})

// Content controller: define $scope.url as an image
.controller('PortfolioController', function($scope, $firebaseArray){
	var ref = new Firebase("https://personalportfolio.firebaseio.com/");
	var contentsRef = ref.child("contents");
	$scope.contents = $firebaseArray(contentsRef);
})