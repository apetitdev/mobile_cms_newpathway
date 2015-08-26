var addressapi = 'http://localhost:1337';

angular.module('starter.controllers', ['ionic', 'ngCookies'])

.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        $httpProvider.defaults.headers.common = 'Content-Type: application/json';
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('WelcomeCtrl', function($scope, $window, $document, $state, $http, $templateCache, $ionicModal, $timeout, $cookies, $cookieStore){

})

.controller('SchoolsCtrl', function($scope, $window, $document, $state, $http, $templateCache, $ionicModal, $timeout, $cookies, $cookieStore){

  $scope.limit = 50;

  $scope.fetchSchool = function() {
    $scope.url = addressapi + "/school?limit=" + $scope.limit + "&callback=JSON_CALLBACK";
    $scope.methode = 'jsonp';
    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.methode, url: $scope.url, cache: $templateCache, headers:{"X-NewPathway-Flavor" : "AngularJS","Content-Type": "application/json"}}).
      success(function(data, status) {
        $scope.status = status;
        //console.log(data);
        $scope.schools = data;
      }).

      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
        console.error('AJAX FAILED');
    });
  }

  $scope.display_image = function(image){
    if(image == 'Not communicated'){
      $scope.show_this = true;
    }else{
      $scope.show_this = false;
    }

    console.log($scope.show_this);
  }

  $scope.updateSchool = function() {
    $scope.url = addressapi + "/school?callback=JSON_CALLBACK";
    $scope.methode = 'put';
    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.methode, url: $scope.url, cache: $templateCache, headers:{"X-NewPathway-Flavor" : "AngularJS","Content-Type": "application/json"}}).
      success(function(data, status) {
        $scope.status = status;
        console.log(data);
        $scope.schools = data;
      }).

      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
        console.error('AJAX FAILED');
    });
  }

})


.controller('MajorsCtrl', function($scope, $window, $document, $state, $http, $templateCache, $ionicModal, $timeout, $cookies, $cookieStore){
  $scope.fetchMajor = function() {
    $scope.url = addressapi + "/major?callback=JSON_CALLBACK";
    $scope.methode = 'jsonp';
    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.methode, url: $scope.url, cache: $templateCache, headers:{"X-NewPathway-Flavor" : "AngularJS","Content-Type": "application/json", "Password":"This is my super paswsword"}}).
      success(function(data, status) {
        $scope.status = status;
        console.log(data);f
        $scope.majors = data;
      }).

      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
        console.error('AJAX FAILED');
    });
  }
})


.controller('CustomersCtrl', function($scope, $window, $document, $state, $http, $templateCache, $ionicModal, $timeout, $cookies, $cookieStore){
  $scope.fetchCustomer = function() {
    $scope.url = addressapi + "/TCustomer?callback=JSON_CALLBACK";
    $scope.methode = 'jsonp';
    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.methode, url: $scope.url, cache: $templateCache, headers:{"X-NewPathway-Flavor" : "AngularJS","Content-Type": "application/json", "Password":"This is my super paswsword"}}).
      success(function(data, status) {
        $scope.status = status;
        $scope.customers = data.tcustomers;
      }).

      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
        console.error('AJAX FAILED');
    });
  }
})

.controller('CountryCtrl', function($scope, $window, $document, $state, $http, $templateCache, $ionicModal, $timeout, $cookies, $cookieStore){
  $scope.fetchCountry = function() {
    $scope.url = addressapi + "/country?callback=JSON_CALLBACK";
    $scope.methode = 'jsonp';
    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.methode, url: $scope.url, cache: $templateCache, headers:{"X-NewPathway-Flavor" : "AngularJS","Content-Type": "application/json", "Password":"This is my super paswsword"}}).
      success(function(data, status) {
        $scope.status = status;
        console.log()
        $scope.countries = gff;
      }).

      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
        console.error('AJAX FAILED');
    });
  }
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
