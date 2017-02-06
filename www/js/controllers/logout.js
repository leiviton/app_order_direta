angular.module('starter.controllers')
    .controller('logoutCtrl',['$scope','OAuth','OAuthToken','$state','UserData','$cart','$ionicHistory',
        function ($scope,OAuth,OAuthToken,$state,UserData,$cart,$ionicHistory) {
            $cart.clear();
            $cart.clearOrder();
            UserData.set(null);
            OAuthToken.removeToken();
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
                disableBack: true,
                historyRoot: true
            });

            $state.go('login');
    }]);