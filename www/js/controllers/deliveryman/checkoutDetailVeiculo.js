angular.module('starter.controllers')
    .controller('DeliverymanDetailVeiculoCtrl',['$scope','$state','$stateParams','$cart','$localStorage'
        ,function ($scope,$state,$stateParams,$cart,$localStorage) {

            $scope.veiculo = $localStorage.getObject('veiculo_order');
            $scope.order = $localStorage.getObject('order_iniciada');
            $scope.index = $localStorage.get('index_inicio');
            $scope.kmInicial = $localStorage.get('kmInicial');
            console.log('veiculo',$scope.veiculo.V_PLACA +'-'+$scope.veiculo.V_NOME);
            $scope.saveKm = function (km) {
                $cart.addKmInicial(km);
                $state.go('deliveryman.view_order',{id:$scope.order.id,index:$scope.index});
            }
    }])
    .controller('DeliverymanDetailVeiculoCloseCtrl',['$scope','$state','$stateParams','$cart','$localStorage'
        ,function ($scope,$state,$stateParams,$cart,$localStorage) {
            $scope.veiculo = $localStorage.getObject('veiculo_order');
            $scope.order = $localStorage.getObject('order_close');
            $scope.index = $localStorage.get('close_index');
            $scope.kmFinal = $localStorage.get('kmFinal');
            console.log('veiculo',$scope.veiculo.V_PLACA +'-'+$scope.veiculo.V_NOME);
            $scope.saveKm = function (km) {
                $cart.addKmFinal(km);
                $state.go('deliveryman.view_close',{id:$scope.order.id,index:$scope.index});
            }
    }]);