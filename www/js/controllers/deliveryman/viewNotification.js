angular.module('starter.controllers')
    .controller('DeliverymanViewNotificationCtrl',[
                  '$scope','$localStorage','$stateParams','$cart','$state',
        function ($scope,$localStorage,$stateParams,$cart,$state) {
            var notifications = $localStorage.getObject('notification');
            for (var i=0;i < notifications.items.length;i++){
                if (notifications.items[i].id == $stateParams.id){
                    $scope.notification = notifications.items[i];
                }
            }
            console.log('not',$scope.notification);
            $scope.confirmar = function (n,i) {
                var not = {id:n.id};
                $cart.addNot(not,dataHoje());
                $cart.removeNotification(i);
                $state.go('deliveryman.notification');
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