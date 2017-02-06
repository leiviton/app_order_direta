angular.module('starter.controllers')
    .controller('DeliverymanCheckoutDetailRadioCtrl',['$scope','$state','$stateParams','$cart','$localStorage',
        function ($scope,$state,$stateParams,$cart,$localStorage) {

            $scope.product = $cart.getItem($stateParams.index);

            $scope.order=$localStorage.getObject('order_close');

            $scope.updateSerial = function () {
                $cart.updateSerial($stateParams.index,$scope.product.serial);
                $state.go('deliveryman.checkout_radio',{id:$scope.order.id});
            }
    }]);