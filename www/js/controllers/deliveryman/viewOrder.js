angular.module('starter.controllers')
    .controller('DeliverymanViewOrderCtrl',[
                  '$scope','$state','$stateParams','DeliverymanOrder','$ionicLoading',
        '$cordovaGeolocation','$ionicPopup','$cart','$localStorage','$order','Sincronizar','$cordovaToast','$cordovaLaunchNavigator'
        ,function ($scope,$state, $stateParams, DeliverymanOrder,$ionicLoading,
                  $cordovaGeolocation,$ionicPopup,$cart,$localStorage,$order,Sincronizar,$cordovaToast,$cordovaLaunchNavigator) {
        var item = [];
        $scope.order = [];
        $scope.equipe = [];
        $scope.actions = [];
        $scope.visitors = [];
        $scope.exibir = [];
        $scope.link = "https://google.com/maps/place/";
        $scope.lat = '';
        $scope.long = '';
        $scope.endereco = '';

        $scope.veiculo = $localStorage.getObject('veiculo_order');

        $scope.kmInicial = $localStorage.get('km_inicial');

        console.log('km', $scope.kmInicial);

        console.log('VEICULO',$scope.veiculo);
        var orders = $localStorage.getObject('orders');
            var message = 'Enviando';
            $ionicLoading.show({
                template: message + ' <ion-spinner></ion-spinner>'
            });
            for (var i=0;i < orders.items.length;i++){
                if (orders.items[i].id == $stateParams.id){
                    $scope.order = orders.items[i];
                    initMarkes($scope.order);
                }
            }

            function initMarkes(order) {
                var address = order.cep + ', ' +
                    order.endereco;
                $scope.endereco = address;
                createMarkerClient(address);
            }

            if ($scope.order.actions.data.length>0) {
                $scope.actions = $scope.order.actions.data;
            }

            for (var i=0;i < $scope.actions.length;i++){
                    $scope.visitors[i] = $scope.actions[i];
            }
            if ($scope.visitors.length <= 0) {
                $scope.exibir = 1;
            } else {
                $scope.exibir = 0;
            }
            $ionicLoading.hide();

            $scope.openCart = function (o) {

                $localStorage.setObject('order_iniciada',o);

                $localStorage.set('index_inicio',$stateParams.index);

                console.log('indicie',$stateParams.index);
                $state.go('deliveryman.veiculo');
            };

            $scope.saveKm = function(o) {
                $localStorage.setObject('order_iniciada',o);

                $localStorage.set('index_inicio',$stateParams.index);

                console.log('indicie',$stateParams.index);

                $state.go('deliveryman.veiculo_detail');
            };


        $scope.goToOrder = function () {
            $ionicPopup.confirm({
                title: 'Atenção',
                template: 'Cliente não se encontra?'
            }).then(function(res) {
                if(res) {
                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner><br> Aguarde'
                    });
                    var posOptions = {timeout: 30000, enableHighAccuracy: true, maximumAge: 0};

                    $cordovaGeolocation
                        .getCurrentPosition(posOptions)
                        .then(function (position) {
                            var lat = position.coords.latitude;
                            var long = position.coords.longitude;

                            var item = {
                                id: $stateParams.id,
                                lat: lat,
                                long:long,
                                status: 0,
                                data: Sincronizar.dataHoje()
                            };
                            $cart.addVisitas(item);
                            $state.go('deliveryman.order');
    
                        }, function(err) {
                            // error
                            $ionicLoading.hide();
                            $cordovaToast.show('Não foi possivel capturar sua localização, habilite o GPS', 'long', 'top');
                        });
                } else {
                    $ionicLoading.hide();
                    $cordovaToast.show('Operação cancelada', 'long', 'top');
                }
            });
        };

        $scope.goToDelivery = function () {

                $ionicPopup.confirm({
                    title: 'Atenção',
                    template: 'Deseja iniciar esta Ordem?',
                }).then(function(res) {
                    if(res) {
                        $ionicLoading.show({
                            template: '<ion-spinner></ion-spinner><br> Aguarde'
                        });
                        var posOptions = {timeout: 30000, enableHighAccuracy: true, maximumAge: 0};

                        $cordovaGeolocation
                            .getCurrentPosition(posOptions)
                            .then(function (position) {
                                console.log('indice',i);
                                var lat = position.coords.latitude;
                                var long = position.coords.longitude;
                                $cart.updateStatus($stateParams.index,'INICIADA');
                                var item = {
                                    id: $stateParams.id,
                                    lat: lat,
                                    long:long,
                                    status: 1,
                                    inic: Sincronizar.dataHojeSql(),
                                    data: Sincronizar.dataHoje(),
                                    kmInicio: null,
                                    kmFinal: null,
                                    signature: null
                                };
                                $cart.addIni(item);
                                $ionicLoading.hide();
                                $state.go('deliveryman.view_close', {id: $scope.order.id,index:$stateParams.index});
                            }, function(err) {
                                // error
                                $ionicLoading.hide();
                                $cordovaToast.show('Não foi possivel capturar sua localização, habilite o GPS', 'long', 'top');
                            });
                    }else {
                        $ionicLoading.hide();
                        $cordovaToast.show('Operação cancelada', 'long', 'top');
                    }
                });
            };
            $scope.giveBack = function () {
               $ionicPopup.confirm({
                    title: 'Atenção',
                    template: 'Deseja devolver esta Ordem?',
                    cssClass: 'animated fadeInDown'
                }).then(function(res) {
                    if(res) {

                        $ionicLoading.show({
                            template: '<ion-spinner></ion-spinner><br> Aguarde'
                        });
                        var posOptions = {timeout: 30000, enableHighAccuracy: true, maximumAge: 0};
                        $cordovaGeolocation
                            .getCurrentPosition(posOptions)
                            .then(function (position) {
                                var lat = position.coords.latitude;
                                var long = position.coords.longitude;

                                console.log(lat,long);
                                item = {
                                    id:$stateParams.id,
                                    lat:lat,
                                    long:long,
                                    status:3,
                                    data: Sincronizar.dataHoje()
                                };
                                $cart.addDevol(item);
                                $cart.removeOrders($stateParams.index);
                                var qtd = $localStorage.get('qtdOrder');
                                if(qtd > 0){
                                    var q = qtd - 1;
                                    $localStorage.set('qtdOrder',q);
                                }
                                $ionicLoading.hide();
                                $state.go('deliveryman.order');
                            }, function(err) {
                                // error
                                $ionicLoading.hide();
                                $cordovaToast.show('Não foi possivel capturar sua localização, habilite o GPS', 'long', 'top');
                            });
                    }else {
                        $ionicLoading.hide();
                        $cordovaToast.show('Operação cancelada', 'long', 'top');
                    }
                });
            };


        function createMarkerClient(address) {
            var urlIcon = 'http://maps.google.com/mapfiles/kml/pal2';
            var geocoder = new google.maps.Geocoder();

            geocoder.geocode({
                address: address
            },function (results,status) {
              console.log(results)
                if (status == google.maps.GeocoderStatus.OK){

                    $scope.lat = results[0].geometry.location.lat();
                    $scope.long = results[0].geometry.location.lng();                    

                }else{
                    $scope.lat = -21.3071181;
                    $scope.long = -46.7186155;
                    $ionicPopup.alert({
                        title:'Advertência',
                        template:'Não foi possivel encontrar o endereço do cliente'
                    });
                }
            })
        }

        //navivagate to target
          $scope.navigateToTarget = function(){

             var destino = [$scope.lat.toString(), $scope.long.toString()];// +'to:'+'-21.3071190,-46.7186160'+'to:'+'-21.3071195,-46.7186165';

             $cordovaLaunchNavigator.navigate(destino);

          }      

          $scope.navigateToTargetActions = function(action){

             var destino = [action];// +'to:'+'-21.3071190,-46.7186160'+'to:'+'-21.3071195,-46.7186165';

             $cordovaLaunchNavigator.navigate(destino);

          }      
    }]);