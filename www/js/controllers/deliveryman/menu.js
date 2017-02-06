angular.module('starter.controllers')
    .controller('DeliverymanMenuCtrl',[
        '$scope','$state','$ionicLoading','$cart','$ionicHistory','$localStorage','UserData','OAuthToken','ionicToast',
        function ($scope, $state,$ionicLoading,$cart,$ionicHistory,$localStorage,UserData,OAuthToken,ionicToast) {

            $scope.user = UserData.get();

            $scope.logout = function () {
                $cart.clear();
                $cart.clearOrder();
                $cart.clearClose();
                $cart.clearLogin();

                OAuthToken.removeToken();
                $ionicHistory.clearCache();
                $ionicHistory.clearHistory();
                $ionicHistory.nextViewOptions({
                    disableBack: true,
                    historyRoot: true
                });

                ionicToast.show('Obrigado por utilizar nosso sistema', 'bottom', false, 3500);

                $state.go('welcome');
            }
    }]);