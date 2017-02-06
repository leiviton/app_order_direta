angular.module('starter.controllers')
    .controller('DeliverymanCheckoutSuccessful',[
        '$scope','$state','$cart','$localStorage','$ionicHistory','ionicToast',
        function ($scope,$state,$cart,$localStorage,$ionicHistory,ionicToast) {
            var cart = $cart.get();
            $scope.items = cart.items;
            $scope.order = $localStorage.getObject('order_close');
            $cart.clear();
            $cart.clearIndex();

            ionicToast.show('Você finalizou a ordem '+$scope.order.number_os_sise+' .', 'bottom', false, 3500);
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({
                disableBack: true,
                historyRoot: true
            });

            $scope.openListOrder = function () {
                $state.go('deliveryman.order');
            };
    }]);