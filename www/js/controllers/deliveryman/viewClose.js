angular.module('starter.controllers')
    .controller('DeliverymanViewCloseCtrl',[
        '$scope','$state','$stateParams','DeliverymanOrder','$ionicLoading',
        '$cordovaGeolocation','$ionicPopup','$cart','UserData','$localStorage','ionicToast','Sincronizar','$cordovaToast',
        function ($scope,$state, $stateParams, DeliverymanOrder,$ionicLoading
            ,$cordovaGeolocation,$ionicPopup,$cart,UserData,$localStorage,ionicToast,Sincronizar,$cordovaToast) {

            $scope.veiculo = $localStorage.getObject('veiculo_order');

            $scope.kmFinal = $localStorage.get('km_final');

            if($scope.kmFinal == null || $scope.kmFinal==''){
                $scope.kmFinal = 0;
            }

            $localStorage.set('close_index',$stateParams.index);

            console.log('index',$stateParams.index);
            $scope.index = '';
            console.log('veiculo',$scope.veiculo);

            $scope.user = UserData.get();
            var orders = $localStorage.getObject('orders');
            console.log(orders);
            $scope.order = [];
            var aux = $cart.getAux();
            if(aux.auxiliar.length == 0 || aux.auxiliar==null){
                aux.auxiliar = null;
                $scope.auxiliary = aux.auxiliar;
            }else {
                $scope.auxiliary = aux.auxiliar;
            }

            for (var i=0;i < orders.items.length;i++){
                if (orders.items[i].id == $stateParams.id){
                    $scope.order = orders.items[i];
                }
            }

            console.log('auxiliar',$scope.auxiliary);
            $cordovaToast.show('Ordem '+$scope.order.ordem+' inicializada com sucesso', 'long', 'top');

            $scope.remove = function (o) {
                $localStorage.setObject('order_close',o);
                $state.go('deliveryman.checkout');
            };
            $scope.openListAuxiliares = function (o) {

                $localStorage.setObject('order_close',o);

                $state.go('deliveryman.checkout');
            };

            $scope.openCart = function (o) {

                $localStorage.setObject('order_close',o);

                console.log('indicie',$stateParams.index);
                $state.go('deliveryman.closeveiculo');
            };

            $scope.saveKm = function(o) {
                $localStorage.setObject('order_close',o);


                console.log('indicie',$stateParams.index);

                $state.go('deliveryman.veiculo_close');
            };

            $scope.openServico = function (o) {

                $localStorage.setObject('order_close',o);

                console.log('indicie',$stateParams.index);
                $state.go('deliveryman.servicos',{id: o.id,index: $stateParams.index});
            };

            $scope.openProduct= function (o) {
                var order = $localStorage.getObject('order_close');
                var indice = $localStorage.get('close_index');
                if (order.length!=0){
                    $cart.clear();
                }

                if(indice != null){
                    $cart.clearIndex();
                }

                $localStorage.setObject('order_close',o);

            };

    }]);