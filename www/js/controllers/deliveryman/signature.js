angular.module('starter.controllers')
    .controller('DeliverymanSignatureCtrl',
        ['$scope','$cart','$localStorage','$state','$stateParams','$ionicLoading','$ionicPopup',
            '$cordovaGeolocation','$ionicHistory','$cordovaToast','Sincronizar',
        function($scope,$cart,$localStorage,$state,$stateParams,$ionicLoading,$ionicPopup,
                 $cordovaGeolocation,$ionicHistory,$cordovaToast,Sincronizar) {
        var canvas = document.getElementById('signatureCanvas');

            function resizeCanvas() {
                // When zoomed out to less than 100%, for some very strange reason,
                // some browsers report devicePixelRatio as less than 1
                // and only part of the canvas is cleared then.
                var ratio =  Math.max(window.devicePixelRatio || 1, 1);
                canvas.width = canvas.offsetWidth * ratio;
                canvas.height = canvas.offsetHeight * ratio;
                canvas.getContext("2d").scale(ratio, ratio);
            }
            window.onresize = resizeCanvas;
            resizeCanvas();

        var signaturePad = new SignaturePad(canvas,{
                    minWidth: 1,
                    maxWidth: 2,
                    penColor: "rgb(34, 34, 34)"
            });

        $scope.veiculo = $localStorage.getObject('veiculo_order');


        $scope.index = $localStorage.get('close_index');
        console.log('veiculo',$scope.veiculo);

        var aux = $cart.getAux();
        if(aux.auxiliar.length == 0 || aux.auxiliar==null){
            aux.auxiliar = null;
            $scope.auxiliary = aux.auxiliar;
        }else {
            $scope.auxiliary = aux.auxiliar;
        }

        $scope.order = $localStorage.getObject('order_close');


    $scope.clearCanvas = function() {
        signaturePad.clear();
    };

    $scope.saveCanvas = function() {
        if (signaturePad.isEmpty()) {
            $cordovaToast.show('Solicite assinatura do cliente. ', 'long', 'center');
        }else{
                var sigImg = signaturePad.toDataURL();

                console.log(sigImg.data);

                $ionicPopup.confirm({
                    title: 'Atenção',
                    template: 'Deseja fechar esta Ordem?'
                }).then(function (res) {

                    if (res) {
                        $ionicLoading.show({
                            template: '<ion-spinner></ion-spinner><br> Aguarde ...'
                        });
                        var posOptions = {timeout: 30000, enableHighAccuracy: true, maximumAge: 0};

                        $cordovaGeolocation
                            .getCurrentPosition(posOptions)
                            .then(function (position) {

                                var lat = position.coords.latitude;
                                var long = position.coords.longitude;

                                console.log(lat, long);

                                var o = {items: angular.copy($scope.items)};
                                angular.forEach(o.items, function (item) {
                                    item.product_id = item.id;
                                });

                                var s_ala = $localStorage.getObject('S_ALA');
                                var s_sen = $localStorage.getObject('S_SEN');
                                var s_com = $localStorage.getObject('S_COM');
                                var s_mon = $localStorage.getObject('S_MON');
                                var s_bat = $localStorage.getObject('S_BAT');
                                var s_bats = $localStorage.getObject('S_BATS');
                                var s_sir = $localStorage.getObject('S_SIR');
                                var s_mod = $localStorage.getObject('S_MOD');
                                var s_disp = $localStorage.getObject('S_DISP');
                                var s_senha = $localStorage.getObject('S_SENHA');
                                var s_ene = $localStorage.getObject('S_ENE');
                                var s_cabo = $localStorage.getObject('S_CABO');
                                var s_outa = $localStorage.getObject('S_OUTA');
                                var s_cam = $localStorage.getObject('S_CAM');
                                var s_camv = $localStorage.getObject('S_CAMV');
                                var s_grav = $localStorage.getObject('S_GRAV');
                                var s_ace = $localStorage.getObject('S_ACE');
                                var s_stand = $localStorage.getObject('S_STAND');
                                var s_cerca = $localStorage.getObject('S_CERCA');
                                var s_haste = $localStorage.getObject('S_HASTE');
                                var s_mola = $localStorage.getObject('S_MOLA');
                                var s_fio = $localStorage.getObject('S_FIO');
                                var s_radio = $localStorage.getObject('S_RADIO');
                                var s_radioo = $localStorage.getObject('S_RADIOO');
                                var s_fibra = $localStorage.getObject('S_FIBRA');
                                var s_fibrao = $localStorage.getObject('S_FIBRAO');
                                var s_lbra1 = $localStorage.getObject('S_LBRA1');
                                var s_lbra2 = $localStorage.getObject('S_LBRA2');
                                var s_lbra3 = $localStorage.getObject('S_LBRA3');
                                var s_lbra4 = $localStorage.getObject('S_LBRA4');
                                var s_lbra5 = $localStorage.getObject('S_LBRA5');
                                var s_bra1 = $localStorage.getObject('S_BRA1');
                                var s_bra2 = $localStorage.getObject('S_BRA2');
                                var s_bra3 = $localStorage.getObject('S_BRA3');
                                var s_bra4 = $localStorage.getObject('S_BRA4');
                                var s_bra5 = $localStorage.getObject('S_BRA5');

                                if (s_lbra1.S_LBRA1.length == 0) {
                                    s_lbra1.S_LBRA1 = {};
                                }
                                if (s_lbra2.S_LBRA2.length == 0) {
                                    s_lbra2.S_LBRA2 = {};
                                }
                                if (s_lbra3.S_LBRA3.length == 0) {
                                    s_lbra3.S_LBRA3 = {};
                                }
                                if (s_lbra4.S_LBRA4.length == 0) {
                                    s_lbra4.S_LBRA4 = {};
                                }
                                if (s_lbra5.S_LBRA5.length == 0) {
                                    s_lbra5.S_LBRA5 = {};
                                }

                                if (s_bra1.S_BRA1.length == 0) {
                                    s_bra1.S_BRA1 = {};
                                }
                                if (s_bra2.S_BRA2.length == 0) {
                                    s_bra2.S_BRA2 = {};
                                }
                                if (s_bra3.S_BRA3.length == 0) {
                                    s_bra3.S_BRA3 = {};
                                }
                                if (s_bra4.S_BRA4.length == 0) {
                                    s_bra4.S_BRA4 = {};
                                }
                                if (s_bra5.S_BRA5.length == 0) {
                                    s_bra5.S_BRA5 = {};
                                }

                                var s = {
                                    'S_ALA': s_ala.S_ALA,
                                    'S_SEN': s_sen.S_SEN,
                                    'S_COM': s_com.S_COM,
                                    'S_MON': s_mon.S_MON,
                                    'S_BAT': s_bat.S_BAT,
                                    'S_BATS': s_bats.S_BATS,
                                    'S_SIR': s_sir.S_SIR,
                                    'S_MOD': s_mod.S_MOD,
                                    'S_DISP': s_disp.S_DISP,
                                    'S_SENHA': s_senha.S_SENHA,
                                    'S_ENE': s_ene.S_ENE,
                                    'S_CABO': s_cabo.S_CABO,
                                    'S_OUTA': s_outa.S_OUTA,
                                    'S_CAM': s_cam.S_CAM,
                                    'S_CAMV': s_camv.S_CAMV,
                                    'S_GRAV': s_grav.S_GRAV,
                                    'S_ACE': s_ace.S_ACE,
                                    'S_STAND': s_stand.S_STAND,
                                    'S_CERCA': s_cerca.S_CERCA,
                                    'S_HASTE': s_haste.S_HASTE,
                                    'S_MOLA': s_mola.S_MOLA,
                                    'S_FIO': s_fio.S_FIO,
                                    'S_RADIO': s_radio.S_RADIO,
                                    'S_RADIOO': s_radioo.S_RADIOO,
                                    'S_FIBRA': s_fibra.S_FIBRA,
                                    'S_FIBRAO': s_fibrao.S_FIBRAO,
                                    'flag_sincronizado': 1
                                };

                                console.log('servico', s);

                                var v = {veiculo: angular.copy($scope.veiculo)};

                                var ax = {auxiliary: angular.copy($scope.auxiliary)};
                                console.log('o', o);
                                angular.forEach(ax.auxiliary, function (item) {
                                    item.CODFUN = item.id
                                });
                                console.log(ax);

                                var serv = '';
                                if ($scope.order.service != null && $scope.order.service != '') {
                                    serv = $scope.order.service;
                                } else {
                                    serv = null;
                                }
                                var or = {
                                    id: $stateParams.id,
                                    lat: lat,
                                    long: long,
                                    service: serv,
                                    items: null,
                                    auxiliary: ax.auxiliary,
                                    status: 2,
                                    close: Sincronizar.dataHojeSql(),
                                    data: Sincronizar.dataHoje(),
                                    servicos: s,
                                    veiculo: v.veiculo,
                                    signature: sigImg
                                };

                                $cart.addClose(or);

                                console.log(or);
                                console.log('indice', $scope.index);
                                $cart.removeOrders($scope.index);
                                var qtd = $localStorage.get('qtdOrder');

                                if (qtd > 0) {
                                    var q = qtd - 1;
                                    $localStorage.set('qtdOrder', q);
                                }

                                $ionicLoading.hide();
                                $cordovaToast.show('Ordem nº ' + $scope.order.ordem + ' fechada com sucesso ', 'long', 'top');
                                $cart.clear();
                                $cart.clearIndex();
                                $cart.clearKms();
                                $ionicHistory.clearHistory();
                                $ionicHistory.nextViewOptions({
                                    disableBack: true,
                                    historyRoot: true
                                });
                                $state.go('deliveryman.order');
                                console.log(ax);
                                $ionicLoading.hide();
                            }, function (err) {
                                console.log('error', err);
                                $ionicLoading.hide();
                                $cordovaToast.show('Não foi possivel capturar sua localização, habilite o GPS', 'long', 'top');
                            });
                    } else {
                        $ionicLoading.hide();
                    }
                });
        }
    };

}]);
