angular.module('starter.controllers')
    .controller('DeliverymanCheckoutServicoCtrl',[
        '$scope','$state','$stateParams','$cart','ClientOrder',
        '$ionicLoading','$ionicPopup','Cupom','$cordovaBarcodeScanner',
        'User','$localStorage','DeliverymanOrder','$cordovaGeolocation','$ionicHistory','ionicToast','Sincronizar',
        function ($scope,$state,$stateParams,$cart,ClientOrder,
                  $ionicLoading,$ionicPopup,Cupom,$cordovaBarcodeScanner,
                  User,$localStorage,DeliverymanOrder,$cordovaGeolocation,$ionicHistory,ionicToast,Sincronizar) {

            var indice = $localStorage.get('close_index');

            $scope.validation = 0;

            $scope.servico = $localStorage.getObject('servicos');

            $scope.veiculo = $localStorage.getObject('veiculo_order');

            var aux = $cart.getAux();
            if(aux.auxiliar.length == 0 || aux.auxiliar==null){
                aux.auxiliar = null;
                $scope.auxiliary = aux.auxiliar;
            }else {
                $scope.auxiliary = aux.auxiliar;
            }
            var orders = $localStorage.getObject('order_close');
            console.log(orders);
            var cart = $cart.get();
            console.log('cart',cart);
            $scope.items = cart.items;

            $scope.order = [];

            for (var i=0;i < orders.length;i++){
                if (orders[i].id == $stateParams.id){
                    $scope.order = orders[i];
                }
            }
            console.log($stateParams.id);
            $scope.removeItem = function (i) {
                $cart.removeItem(i);
                $scope.items.splice(i,1);
            };

            $scope.salvarServicos = function (servico) {

                     var S_ALA =  servico.S_ALA;
                     var S_SEN =  servico.S_SEN;
                     var S_COM =  servico.S_COM;
                     var S_MON =  servico.S_MON;
                     var S_BAT =  servico.S_BAT;
                     var S_BATS = servico.S_BATS;
                     var S_SIR = servico.S_SIR;
                     var S_MOD =  servico.S_MOD;
                     var S_DISP = servico.S_DISP;
                     var S_SENHA =  servico.S_SENHA;
                     var S_ENE = servico.S_ENE;
                     var S_CABO = servico.S_CABO;
                     var S_OUTA = servico.S_OUTA;
                     var S_CAMV = servico.S_CAMV;
                     var S_GRAV = servico.S_GRAV;
                     var S_ACE = servico.S_ACE;
                     var S_STAND = servico.S_STAND;
                     var S_CERCA = servico.S_CERCA;
                     var S_HASTE =  servico.S_HASTE;
                     var S_MOLA = servico.S_MOLA;
                     var S_FIO = servico.S_FIO;
                     var S_RADIO = servico.S_RADIO;
                     var S_RADIOO = servico.S_RADIOO;
                     var S_FIBRA = servico.S_FIBRA;
                     var S_FIBRAO = servico.S_FIBRAO;
                     var S_LBRA1 = servico.S_LBRA1;
                     var S_BRA1 =  servico.S_BRA1;
                     var S_LBRA2 = servico.S_LBRA2;
                     var S_BRA2 = servico.S_BRA2;
                     var S_LBRA3 = servico.S_LBRA3;
                     var S_BRA3 = servico.S_BRA3;
                     var S_LBRA4 =  servico.S_LBRA4;
                     var S_BRA4 = servico.S_BRA4;
                     var S_LBRA5 = servico.S_LBRA5;
                     var S_BRA5 = servico.S_BRA5;
                if(S_ALA && S_SEN && S_COM && S_MON && S_BAT && S_BATS && S_SIR && S_MOD
                    && S_DISP && S_SENHA && S_ENE && S_CABO && S_OUTA && S_CAMV == '' && S_GRAV == ''
                    && S_ACE == '' && S_STAND == '' && S_CERCA == '' && S_HASTE == '' && S_MOLA == ''
                    && S_FIO == '' && S_RADIO == '' && S_RADIOO == '' && S_FIBRA == '' && S_FIBRAO == ''
                    && S_LBRA1 == '' && S_BRA1 == '' && S_LBRA2 == '' && S_BRA2 == '' && S_LBRA3 == ''
                    && S_BRA3 == '' && S_LBRA4 == '' && S_BRA4 == '' && S_LBRA5 == '' && S_BRA5 == ''){

                    ionicToast.show('Voce não serviços a ordem', 'middle', false, 3500);

                }else{
                    var ser = {
                        'S_ALA': S_ALA,
                        'S_SEN': S_SEN,
                        'S_COM': S_COM,
                        'S_MON': S_MON,
                        'S_BAT':S_BAT,
                        'S_BATS':S_BATS,
                        'S_SIR':S_SIR,
                    };

                    $cart.addServicos(ser);
                }

                var o = $localStorage.getObject('order_close');

                goToDeliveryClose();

                /*switch (o.type) {
                    case 1:
                        $state.go('deliveryman.checkout_fibra', {id: o.id, index: $stateParams.index});
                        break;
                    case 2:
                        $state.go('deliveryman.checkout_radio', {id: o.id, index: $stateParams.index});
                        break;
                    case 3:
                        $state.go('deliveryman.checkout_seguranca', {id: o.id, index: $stateParams.index});
                        break;
                    case 4:
                        $state.go('deliveryman.checkout_fibra', {id: o.id, index: $stateParams.index});
                        break;
                    case 5:
                        $state.go('deliveryman.checkout_radio', {id: o.id, index: $stateParams.index});
                        break;
                    case 6:
                        $state.go('deliveryman.checkout_radio', {id: o.id, index: $stateParams.index});
                        break;
                    default:
                        $localStorage.setObject('order_close', null);
                        $ionicPopup.alert({
                            title: 'Informação',
                            template: 'Ocorreu um erro, tente novamente'
                        });
                }*/
            };


            $scope.goToDeliveryClose = function (servico) {
                $ionicPopup.confirm({
                    title: 'Atenção',
                    template: 'Deseja fechar esta Ordem?'
                }).then(function(res) {
                    $ionicLoading.show({
                        template: '<ion-spinner></ion-spinner><br> Aguarde ...'
                    });

                    if(res) {
                        var S_ALA =  servico.S_ALA;
                        var S_SEN =  servico.S_SEN;
                        var S_COM =  servico.S_COM;
                        var S_MON =  servico.S_MON;
                        var S_BAT =  servico.S_BAT;
                        var S_BATS = servico.S_BATS;
                        var S_SIR = servico.S_SIR;
                        var S_MOD =  servico.S_MOD;
                        var S_DISP = servico.S_DISP;
                        var S_SENHA =  servico.S_SENHA;
                        var S_ENE = servico.S_ENE;
                        var S_CABO = servico.S_CABO;
                        var S_OUTA = servico.S_OUTA;
                        var S_CAMV = servico.S_CAMV;
                        var S_GRAV = servico.S_GRAV;
                        var S_ACE = servico.S_ACE;
                        var S_STAND = servico.S_STAND;
                        var S_CERCA = servico.S_CERCA;
                        var S_HASTE =  servico.S_HASTE;
                        var S_MOLA = servico.S_MOLA;
                        var S_FIO = servico.S_FIO;
                        var S_RADIO = servico.S_RADIO;
                        var S_RADIOO = servico.S_RADIOO;
                        var S_FIBRA = servico.S_FIBRA;
                        var S_FIBRAO = servico.S_FIBRAO;
                        var S_LBRA1 = servico.S_LBRA1;
                        var S_BRA1 =  servico.S_BRA1;
                        var S_LBRA2 = servico.S_LBRA2;
                        var S_BRA2 = servico.S_BRA2;
                        var S_LBRA3 = servico.S_LBRA3;
                        var S_BRA3 = servico.S_BRA3;
                        var S_LBRA4 =  servico.S_LBRA4;
                        var S_BRA4 = servico.S_BRA4;
                        var S_LBRA5 = servico.S_LBRA5;
                        var S_BRA5 = servico.S_BRA5;

                        if(S_ALA && S_SEN && S_COM && S_MON && S_BAT && S_BATS && S_SIR && S_MOD
                            && S_DISP && S_SENHA && S_ENE && S_CABO && S_OUTA && S_CAMV == '' && S_GRAV == ''
                            && S_ACE == '' && S_STAND == '' && S_CERCA == '' && S_HASTE == '' && S_MOLA == ''
                            && S_FIO == '' && S_RADIO == '' && S_RADIOO == '' && S_FIBRA == '' && S_FIBRAO == ''
                            && S_LBRA1 == '' && S_BRA1 == '' && S_LBRA2 == '' && S_BRA2 == '' && S_LBRA3 == ''
                            && S_BRA3 == '' && S_LBRA4 == '' && S_BRA4 == '' && S_LBRA5 == '' && S_BRA5 == ''){

                            ionicToast.show('Voce não serviços a ordem', 'middle', false, 3500);

                        }else{
                            var ser = {
                                'S_ALA': S_ALA,
                                'S_SEN': S_SEN,
                                'S_COM': S_COM,
                                'S_MON': S_MON,
                                'S_BAT':S_BAT,
                                'S_BATS':S_BATS,
                                'S_SIR':S_SIR,
                            };

                            $cart.addServicos(ser);




                            var posOptions = {timeout: 30000, enableHighAccuracy: true, maximumAge: 0};

                            $cordovaGeolocation
                                .getCurrentPosition(posOptions)
                                .then(function (position) {
                                    var lat = position.coords.latitude;
                                    var long = position.coords.longitude;

                                    console.log(lat,long);

                                    var  o = {items: angular.copy($scope.items)};
                                    angular.forEach(o.items,function (item) {
                                        item.product_id = item.id;
                                    });

                                    var  s = {servicos: angular.copy($scope.servico)};

                                    var v = {veiculos: angular.copy($scope.veiculo)};

                                    var  ax = {auxiliary: angular.copy($scope.auxiliary)};
                                    console.log('o',o);
                                    angular.forEach(ax.auxiliary,function (item) {
                                        item.auxiliary_id = item.id;
                                    });
                                    console.log(ax);
                                    var or = {
                                        id: $stateParams.id,
                                        lat: lat,
                                        long: long,
                                        service: orders.service,
                                        items: o.items,
                                        auxiliary:ax.auxiliary,
                                        status: 2,
                                        close: Sincronizar.dataHojeSql(),
                                        data: Sincronizar.dataHoje(),
                                        servicos: s.servicos,
                                        veiculo: v.veiculos
                                    };

                                    $cart.addClose(or);
                                    $cart.removeOrders(indice);

                                    var qtd = $localStorage.get('qtdOrder');

                                    if(qtd > 0){
                                        var q = qtd - 1;
                                        $localStorage.set('qtdOrder',q);
                                    }
                                    $ionicLoading.hide();

                                    ionicToast.show('Ordem fechada com sucesso', 'top', false, 3500);
                                    $cart.clear();
                                    $cart.clearIndex();
                                    $ionicHistory.clearHistory();
                                    $ionicHistory.nextViewOptions({
                                        disableBack: true,
                                        historyRoot: true
                                    });
                                    $state.go('deliveryman.order');
                                    console.log(ax);
                                }, function(err) {
                                    $ionicLoading.hide();
                                });
                        }
                    } else {
                        $ionicLoading.hide();
                    }
                });
            };
        }]);
