angular.module('starter.controllers')
    .controller('DeliverymanViewProductFibraCtrl',[
        '$scope','$state','Product','$ionicLoading','$cart','$localStorage',
        function ($scope, $state, Product,$ionicLoading,$cart,$localStorage) {

            $scope.products = [];
            $scope.order =  $localStorage.getObject('order_close');
            $ionicLoading.show({
               template: 'Carregando...'
            });
            function getProducts() {
                $scope.products = $localStorage.getObject('produtos_fibra').items;
                console.log('getProducts',$scope.products);
                $ionicLoading.hide();
            }
            getProducts();
            $scope.addItem = function (item) {
                item.qtd = 1;
                $cart.addItem(item);
                $state.go('deliveryman.checkout_fibra',{id:$scope.order.id});
            };
    }]);