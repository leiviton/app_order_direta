angular.module('starter.controllers')
    .controller('DeliverymanNotificationCtrl',[
        '$scope','$state','$ionicLoading','UserData','OAuthToken','$cart','$localStorage','DeliverymanOrder',
        function ($scope, $state,$ionicLoading,UserData,OAuthToken,$cart,$localStorage,DeliverymanOrder) {
                $scope.notification = $localStorage.getObject('notification').items;
                $scope.exibir = [];
                if($scope.notification<=0){
                    $scope.exibir=null;
                }

            $scope.openDetail = function (notification) {
                var noti = $localStorage.getObject('notification_read');
                var n = {id:notification.id,read:dataHoje()};
                if (noti.items.length==0){
                    $localStorage.setObject('notification_read',{items:[n]});
                }else{
                    $cart.addNot(n);
                }
                $state.go('deliveryman.view_notification',{id: notification.id});
            };

            function dataHoje() {
                var data = new Date();
                var dia = data.getDate();
                var mes = data.getMonth() + 1;
                if (dia < 10){
                    dia = "0" + dia;
                }
                if (mes < 10) {
                    mes = "0" + mes;
                }
                var ano = data.getFullYear();
                var horas = new Date().getHours();
                if (horas < 10) {
                    horas = "0" + horas;
                }
                var minutos = new Date().getMinutes();
                if (minutos < 10) {
                    minutos = "0" + minutos;
                }
                var result = dia+"/"+mes+"/"+ano+" - "+horas + "h" + minutos;
                return result;
            }
    }]);