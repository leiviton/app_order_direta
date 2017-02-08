angular.module('starter.controllers')
    .controller('DeliverymanOrderCtrl',[
        '$scope','$state','$ionicLoading','$stateParams','$ionicActionSheet','DeliverymanOrder',
        '$ionicPopup','$cordovaGeolocation','$localStorage','$ionicModal',
        function ($scope, $state,$ionicLoading,$stateParams,$ionicActionSheet,DeliverymanOrder,
                  $ionicPopup,$cordovaGeolocation,$localStorage,$ionicModal) {

            $scope.items = [];


            $ionicLoading.show({
               template: 'Carregando...'
            });

            $scope.openOrderDetail = function (order,index) {
                if (order.status == 'INICIADA') {
                    $state.go('deliveryman.view_close', {id: order.id,index: index});
                }else {
                    $state.go('deliveryman.view_order', {id: order.id,index: index});
                }
            };
            function getOrders() {
                $scope.items = $localStorage.getObject('orders').items;
                $ionicLoading.hide();
            }

            getOrders();

            function distLatLong(lat1,lon1,lat2,lon2) {
                var R = 6371; // raio da terra
                var Lati = Math.PI/180*(lat2-lat1);  //Graus  - > Radianos
                var Long = Math.PI/180*(lon2-lon1);
                var a =
                    Math.sin(Lati/2) * Math.sin(Lati/2) +
                    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(Long/2) * Math.sin(Long/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                var d = R * c; // distância en km
                return d;
            }
    }]);