angular.module('starter.controllers')
    .controller('SincronizarCtrl',['$scope','$ionicLoading','OAuth','OAuthToken','$state','UserData','$cart','$ionicHistory','$redirect','$timeout',
        function ($scope,$ionicLoading,OAuth,OAuthToken,$state,UserData,$cart,$ionicHistory,$redirect,$timeout) {
            $ionicLoading.show({
                template: 'Sincronizando...'
            });
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
                disableBack: true,
                historyRoot: true
            });
            $ionicLoading.hide();
            $timeout($redirect.redirectAfterLogin()
            ,10000);

    }]);