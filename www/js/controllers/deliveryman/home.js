angular.module('starter.controllers')
    .controller('DeliverymanHomeCtrl',[
        '$scope','$ionicLoading','$localStorage','$redirect','$timeout','UserData','OAuthToken','$ionicHistory',
        'ionicToast','$cart','$state','$cordovaToast','$ionicPopover',
        function ($scope, $ionicLoading,$localStorage,$redirect,$timeout,UserData,OAuthToken,$ionicHistory,
                  ionicToast,$cart,$state,$cordovaToast,$ionicPopover) {

            var login = $localStorage.getObject('login');

            $scope.user = UserData.get();


            $scope.sincronizar = function() {
                if (window.Connection) {
                   if (navigator.connection.type != Connection.NONE && navigator.connection.type != Connection.UNKNOWN) {
                        console.log('iniciou sincronização');
                        UserData.login(login);
                    }
                   else{
                       if (navigator.connection.type == Connection.NONE || navigator.connection.type == Connection.UNKNOWN){
                           $cordovaToast.show('Não foi possivel conectar ao servidor, smartphone offline', 'long', 'top');
                       }
                   }
                }
            };

            $ionicPopover.fromTemplateUrl('templates/popover.html', {
                scope: $scope
            }).then(function(popover) {
                $scope.popover = popover;
            });

            $scope.openPopover = function($event) {
                $scope.popover.show($event);
            };


            $scope.countNot = $localStorage.getObject('notification').items.length;
            $scope.data = $localStorage.get('sincronizado');
            $scope.count = $localStorage.get('qtdOrder');
            $scope.countAt = 0;

            $scope.logout = function () {
                $scope.popover.hide();
                $cart.clear();
                $cart.clearOrder();
                $cart.clearClose();
                $cart.clearLogin();
                $ionicHistory.clearCache();
                $ionicHistory.clearHistory();
                $ionicHistory.nextViewOptions({
                    disableBack: true,
                    historyRoot: true
                });
                $cordovaToast.show('Obrigado volte sempre', 'long', 'top');
                $state.go('welcome');
            };

            $scope.newPassword = function () {
                $scope.popover.hide();

                $state.go('password');
            };
    }]);
