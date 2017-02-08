angular.module('starter.controllers')
    .controller('loginCtrl',['$scope','UserData',
        function ($scope,UserData) {

        $scope.user = {
            username: '',
            password: ''
        };

        $scope.login = function () {
            UserData.login($scope.user);
        }
    }]);