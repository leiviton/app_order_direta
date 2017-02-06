angular.module('starter.controllers')
    .controller('DeliverymanCheckoutCtrl',[
        '$scope','$state','$cart','DeliverymanOrder','$ionicLoading','$ionicPopup','Cupom','$cordovaBarcodeScanner','User','$localStorage',
        function ($scope,$state,$cart,DeliverymanOrder,$ionicLoading,$ionicPopup,Cupom,$cordovaBarcodeScanner,User,$localStorage) {


            var aux = $cart.getAux();
            $scope.items = aux.auxiliar;

            $scope.order =  $localStorage.getObject('order_close');

            var index = $localStorage.getObject('close_index');

            $scope.removeItem = function (i) {
               $cart.removeAux(i);
               $scope.items.splice(i,1);
            };

            $scope.openListAuxiliares = function () {
                $state.go('deliveryman.view_auxiliary');
            };

            $scope.voltar = function () {
                $state.go('deliveryman.view_close',{id:$scope.order.id,index:index});
            };
    }]);
