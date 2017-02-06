angular.module('starter.controllers')
    .controller('DeliverymanViewAuxiliaryCtrl',[
        '$scope','$state','Auxiliary','$ionicLoading','$cart','$localStorage',
        function ($scope, $state, Auxiliary,$ionicLoading,$cart,$localStorage) {

            $scope.auxiliary = [];

            $scope.order =  $localStorage.getObject('order_close');
            var index = $localStorage.getObject('close_index');

            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner><br> Aguarde'
            });

            function getAuxiliares() {
                $scope.auxiliary = $localStorage.getObject('auxiliary').items;
                $ionicLoading.hide();
            }
            getAuxiliares();
            $scope.addItem = function (auxiliary) {
                $cart.addAux(auxiliary);
                $state.go('deliveryman.checkout');
            };
    }]);