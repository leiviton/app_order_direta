angular.module('starter.controllers')
    .controller('DeliverymanCheckoutDetailCtrl',['$scope','$state','$stateParams','$cart','$localStorage'
        ,function ($scope,$state,$stateParams,$cart,$localStorage) {

        $scope.product = $cart.getItem($stateParams.index);
        $scope.order=$localStorage.getObject('order_close');
        console.log('order',$scope.order);
        $scope.updateSerial = function () {
            $cart.updateSerial($stateParams.index,$scope.product.serial);
            $state.go('deliveryman.checkout_fibra',{id:$scope.order.id});
        }
    }]);