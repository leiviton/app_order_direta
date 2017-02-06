angular.module('starter.controllers')
    .controller('DeliverymanViewProductRadioCtrl',[
        '$scope','$state','Product','$ionicLoading','$cart','$localStorage',
        function ($scope, $state, Product,$ionicLoading,$cart,$localStorage) {

            $scope.products = [];
            $scope.order =  $localStorage.getObject('order_close');
            $ionicLoading.show({
               template: 'Carregando...'
            });

            function getProducts() {
                $scope.products = $localStorage.getObject('produtos_radio').items;
                console.log('getProducts',$scope.products);
                $ionicLoading.hide();
            }
            getProducts();

            $scope.addItem = function (item) {
                item.qtd = 1;
                $cart.addItem(item);
                $state.go('deliveryman.checkout_radio',{id:$scope.order.id});
            };
    }]);