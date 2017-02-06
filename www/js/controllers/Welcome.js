angular.module('starter.controllers')
    .controller('welcomeCtrl',['$scope','OAuth','OAuthToken','$ionicPopup','$state','UserData','$ionicLoading','$localStorage','$redirect',
        function ($scope,OAuth,OAuthToken,$ionicPopup,$state,UserData,$ionicLoading,$localStorage,$redirect) {

        $scope.user = {
            username: '',
            password: ''
        };
        var log = $localStorage.getObject('login');

        $scope.entrar = function () {
            var o = $localStorage.getObject('login');
            if(o != null && o != ''){
                UserData.login(o);
            }else{
                $state.go('login');
            }

        };

        $scope.login = function () {
            if(log!==null) {
                if ($scope.user.username === log.username && $scope.user.password === log.password) {
                    console.log('logou');
                    $redirect.redirectAfterLogin();
                } else {
                    UserData.login($scope.user);
                }
            }else if(log===null){
                UserData.login($scope.user);
            }
        };
    }]);