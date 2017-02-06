angular.module('starter.controllers')
    .controller('loginCtrl',['$scope','OAuth','OAuthToken','$ionicPopup','$state','UserData','$ionicLoading','$localStorage','$redirect','Sincronizar','User','$timeout',
        function ($scope,OAuth,OAuthToken,$ionicPopup,$state,UserData,$ionicLoading,$localStorage,$redirect,Sincronizar,User,$timeout) {

        $scope.user = {
            username: '',
            password: ''
        };

        $scope.login = function () {
            UserData.login($scope.user);
        }
    }]);