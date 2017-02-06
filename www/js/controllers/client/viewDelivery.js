angular.module('starter.controllers')
    .controller('ClientViewDeliveryCtrl',[
        '$scope','$stateParams','ClientOrder','$ionicLoading','$ionicPopup','UserData',
        function ($scope, $stateParams,ClientOrder,$ionicLoading,$ionicPopup,UserData) {

        $scope.order = [];
        $scope.map = {
            center:{
                latitude:-21.3070258,
                longitude:-46.7185616
            },
            zoom:16
        };

        $scope.markers = [
                {
                    id: 1,
                    coords: {
                        latitude: -21.3070258,
                        longitude: -46.7185616
                    },
                    options:{
                        title:'Leiviton',
                        labelContent:'tecnico 1',
                        icon:'http://maps.google.com/mapfiles/kml/shapes/motorcycling.png'
                    }

                },
                {
                    id: 2,
                    coords: {
                        latitude: -21.3170260,
                        longitude: -46.7185620
                    },
                    options:{
                        title:'Leiviton 2',
                        labelContent:'tecnico 2',
                        icon:'http://maps.google.com/mapfiles/kml/shapes/motorcycling.png'
                    }

                }
            ];

        $ionicLoading.show({
           template: 'Carregando...'
        });
        ClientOrder.get({id:$stateParams.id, include:"items,cupom"},function (data) {
            $scope.order = data.data;
            $ionicLoading.hide();
            if ($scope.order.status == 1){
                console.log($scope.order.status);
                initMarkes();
            }else {
                $ionicPopup.alert({
                    title:'Advertência',
                    template:'Pedido não está em entrega'
                });
            }
        },function (dataError) {
            $ionicLoading.hide();
        });
        
        function initMarkes() {
            var client = UserData.get().client.data,
                address = client.zipcode + ', ' +
                        client.address +', ' +
                        client.city +' - '+
                        client.state;
            createMarkerClient(address);
        }    
        
        function createMarkerClient(address) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                address: address
            },function (results,status) {
                if (status == google.maps.GeocoderStatus.OK){

                }else{
                    $ionicPopup.alert({
                        title:'Advertência',
                        template:'Não foi possivel encontrar seu endereço'
                    });
                }
            })
        }
    }]);