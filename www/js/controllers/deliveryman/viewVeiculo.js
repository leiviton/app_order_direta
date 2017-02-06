angular.module('starter.controllers')
    .controller('DeliverymanVeiculoCtrl',[
        '$scope','$state','$ionicLoading','$cart','$localStorage',
        function ($scope, $state,$ionicLoading,$cart,$localStorage) {
            $scope.veiculos = [];
            $scope.order =  $localStorage.getObject('order_iniciada');
            var index = $localStorage.get('index_inicio');
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner><br> Aguarde'
            });
            function getVeiculos() {
                $scope.veiculos = $localStorage.getObject('veiculos');
                console.log('getVeiculo',$scope.veiculos);
                $ionicLoading.hide();
            }
            getVeiculos();
            $scope.addItem = function (item) {
                $cart.addVeiculo(item);
                $state.go('deliveryman.view_order',{id:$scope.order.id,index:index});
            };
    }])
    .controller('DeliverymanVeiculoCloseCtrl',[
        '$scope','$state','$ionicLoading','$cart','$localStorage',
        function ($scope, $state,$ionicLoading,$cart,$localStorage) {
            $scope.veiculos = [];
            $scope.order =  $localStorage.getObject('order_close');
            var index = $localStorage.get('close_index');
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner><br> Aguarde'
            });
            function getVeiculos() {
                $scope.veiculos = $localStorage.getObject('veiculos');
                console.log('getVeiculo',$scope.veiculos);
                $ionicLoading.hide();
            }
            getVeiculos();
            $scope.addItem = function (item) {
                $cart.addVeiculo(item);
                $state.go('deliveryman.view_close',{id:$scope.order.id,index:index});
            };
        }]);