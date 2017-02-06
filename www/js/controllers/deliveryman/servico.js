angular.module('starter.controllers')
    .controller('DeliverymanServicoCtrl',[
        '$scope','$state','$stateParams','$cart','ClientOrder',
        '$ionicLoading','$ionicPopup','Cupom','$cordovaBarcodeScanner',
        'User','$localStorage','DeliverymanOrder','$cordovaGeolocation','$ionicHistory','ionicToast','Sincronizar','$ionicModal',
        '$cordovaToast',
        function ($scope,$state,$stateParams,$cart,ClientOrder,
                  $ionicLoading,$ionicPopup,Cupom,$cordovaBarcodeScanner,
                  User,$localStorage,DeliverymanOrder,$cordovaGeolocation,$ionicHistory,ionicToast,Sincronizar,$ionicModal,$cordovaToast) {

            $scope.veiculo = $localStorage.getObject('veiculo_order');

            $scope.kmFinal = $localStorage.get('km_final');

            $scope.kmInicial = $localStorage.get('km_inicial');

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



             $ionicModal.fromTemplateUrl('templates/modal.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modal = modal;
            });

            $scope.createServico = function(u) {
                var obj = {};

                var value_servico = '';
                var var_servico = $localStorage.get('var_servico');

                console.log(u);

                var contador_servico = 0;

                for(var i in u){
                    if(u[i]==true){
                        contador_servico = contador_servico + 1;
                    }
                }

                console.log('contador',contador_servico);

                if(contador_servico < 6){
                    if(u.ajustar==true){
                        value_servico+='A';
                    }
                    if(u.cadastrar==true){
                        value_servico+='B';
                    }
                    if(u.configurar==true){
                        value_servico+='C';
                    }
                    if(u.desativar==true){
                        value_servico+='D';
                    }
                    if(u.instalar==true){
                        value_servico+='E';
                    }
                    if(u.oustrosServicos==true){
                        value_servico+='F';
                    }
                    if(u.recuperar==true){
                        value_servico+='G';
                    }
                    if(u.revisar==true){
                        value_servico+='H';
                    }
                    if(u.reparar==true){
                        value_servico+='I';
                    }
                    if(u.refazer==true){
                        value_servico+='J';
                    }
                    if(u.reconfigurar==true){
                        value_servico+='L';
                    }
                    if(u.reinstalar==true){
                        value_servico+='M';
                    }
                    if(u.retirar==true){
                        value_servico+='N';
                    }
                    if(u.substituir==true){
                        value_servico+='O';
                    }
                    if(u.testar==true){
                        value_servico+='P';
                    }
                    if(u.treinar==true){
                        value_servico+='Q';
                    }

                    console.log(value_servico);


                    if (var_servico=='S_ALA') {
                        obj = {
                            "S_ALA":value_servico
                        };
                        $scope.checked_sAla = true;
                    }else if(var_servico=='S_SEN'){
                        obj = {
                            "S_SEN":value_servico
                        };
                        $scope.checked_sSen = true;
                    }else if(var_servico=='S_COM'){
                        obj = {
                            "S_COM":value_servico
                        };
                        $scope.checked_sCom = true;
                    }else if(var_servico=='S_MON'){
                        obj = {
                            "S_MON":value_servico
                        };
                        $scope.checked_sMon = true;
                    }else if(var_servico=='S_BAT'){
                        obj = {
                            "S_BAT":value_servico
                        };
                        $scope.checked_sBat = true;
                    }else if(var_servico=='S_BATS'){
                        obj = {
                            "S_BATS":value_servico
                        };
                        $scope.checked_sBats = true;
                    }else if(var_servico=='S_SIR'){
                        obj = {
                            "S_SIR":value_servico
                        };
                        $scope.checked_sSir = true;
                    }else if(var_servico=='S_MOD'){
                        obj = {
                            "S_MOD":value_servico
                        };
                        $scope.checked_sMod = true;
                    }else if(var_servico=='S_DISP'){
                        obj = {
                            "S_DISP":value_servico
                        };
                        $scope.checked_sDisp = true;
                    }else if(var_servico=='S_SENHA'){
                        obj = {
                            "S_SENHA":value_servico
                        };
                        $scope.checked_sSenha = true;
                    }else if(var_servico=='S_ENE'){
                        obj = {
                            "S_ENE":value_servico
                        };
                        $scope.checked_sEne = true;
                    }else if(var_servico=='S_CABO'){
                        obj = {
                            "S_CABO":value_servico
                        };
                        $scope.checked_sCabo = true;
                    }else if(var_servico=='S_OUTA'){
                        obj = {
                            "S_OUTA":value_servico
                        };
                        $scope.checked_sOuta = true;
                    }else if(var_servico=='S_CAM'){
                        obj = {
                            "S_CAM":value_servico
                        };
                        $scope.checked_sCam = true;
                    }else if(var_servico=='S_CAMV'){
                        obj = {
                            "S_CAMV":value_servico
                        };
                        $scope.checked_sCamv = true;
                    }else if(var_servico=='S_GRAV'){
                        obj = {
                            "S_GRAV":value_servico
                        };
                        $scope.checked_sGrav = true;
                    }else if(var_servico=='S_ACE'){
                        obj = {
                            "S_ACE":value_servico
                        };
                        $scope.checked_sAce = true;
                    }else if(var_servico=='S_STAND'){
                        obj = {
                            "S_STAND":value_servico
                        };
                        $scope.checked_sStand = true;
                    }else if(var_servico=='S_HASTE'){
                        obj = {
                            "S_HASTE":value_servico
                        };
                        $scope.checked_sHaste = true;
                    }else if(var_servico=='S_CERCA'){
                        obj = {
                            "S_CERCA":value_servico
                        };
                        $scope.checked_sCerca = true;
                    }else if(var_servico=='S_MOLA'){
                        obj = {
                            "S_MOLA":value_servico
                        };
                        $scope.checked_sMola = true;
                    }else if(var_servico=='S_FIO'){
                        obj = {
                            "S_FIO":value_servico
                        };
                        $scope.checked_sFio = true;
                    }else if(var_servico=='S_RADIO'){
                        obj = {
                            "S_RADIO":value_servico
                        };
                        $scope.checked_sRadio = true;
                    }else if(var_servico=='S_RADIOO'){
                        obj = {
                            "S_RADIOO":value_servico
                        };
                        $scope.checked_sRadioo = true;
                    }else if(var_servico=='S_FIBRA'){
                        obj = {
                            "S_FIBRA":value_servico
                        };
                        $scope.checked_sFibra = true;
                    }else if(var_servico=='S_FIBRAO'){
                        obj = {
                            "S_FIBRAO":value_servico
                        };
                        $scope.checked_sFibrao= true;
                    }

                    $cart.addServicos(var_servico,obj);

                    for(var i in u){
                        u[i] = false;
                    }

                    $cart.limpaVarServico();

                    $scope.modal.hide();
                }else{
                    $cordovaToast.show('Não é possivel selecionar mais que 5 serviços, verifique e tente novamente.', 'long', 'top');

                }
            };

            $scope.openModal = function(ser) {
                $cart.addVarServicos(ser);
                $scope.modal.show();
            };

            $scope.fechar = function (u) {
                for(var i in u){
                    u[i] = false;
                }
                $scope.modal.hide();
            };

            $ionicModal.fromTemplateUrl('templates/label.html', {
                scope: $scope
            }).then(function(modal) {
                $scope.modalLabel = modal;
            });


            $scope.createServicoLabel = function(u) {

                var value_servico = '';
                var S_BRA1 = $localStorage.getObject('S_BRA1');
                var S_BRA2 = $localStorage.getObject('S_BRA2');
                var S_BRA3 = $localStorage.getObject('S_BRA3');
                var S_BRA4 = $localStorage.getObject('S_BRA4');
                var S_BRA5 = $localStorage.getObject('S_BRA5');

                var contador_servico = 0;

                for(var i in u){
                    if(u[i]==true){
                        contador_servico = contador_servico + 1;
                    }
                }

                console.log('contador',contador_servico);

                if(contador_servico < 6){
                    if(u.ajustar==true){
                        value_servico+='A';
                    }
                    if(u.cadastrar==true){
                        value_servico+='B';
                    }
                    if(u.configurar==true){
                        value_servico+='C';
                    }
                    if(u.desativar==true){
                        value_servico+='D';
                    }
                    if(u.instalar==true){
                        value_servico+='E';
                    }
                    if(u.oustrosServicos==true){
                        value_servico+='F';
                    }
                    if(u.recuperar==true){
                        value_servico+='G';
                    }
                    if(u.revisar==true){
                        value_servico+='H';
                    }
                    if(u.reparar==true){
                        value_servico+='I';
                    }
                    if(u.refazer==true){
                        value_servico+='J';
                    }
                    if(u.reconfigurar==true){
                        value_servico+='L';
                    }
                    if(u.reinstalar==true){
                        value_servico+='M';
                    }
                    if(u.retirar==true){
                        value_servico+='N';
                    }
                    if(u.substituir==true){
                        value_servico+='O';
                    }
                    if(u.testar==true){
                        value_servico+='P';
                    }
                    if(u.treinar==true){
                        value_servico+='Q';
                    }

                    console.log(value_servico);

                    var obs = {

                    };


                    if ($localStorage.getObject('S_LBRA1').S_LBRA1.length==0) {
                        obs = {
                            "S_LBRA1": value_servico
                        };
                        $cart.addLabelServicos('S_LBRA1',obs);
                        $scope.checked_sBra1= true;
                    }else if($localStorage.getObject('S_LBRA2').S_LBRA2.length==0){
                        obs = {
                            "S_LBRA2": value_servico
                        };
                        $cart.addLabelServicos('S_LBRA2',obs);
                        $scope.checked_sBra2= true;
                    }else if($localStorage.getObject('S_LBRA3').S_LBRA3.length==0){
                        obs = {
                            "S_LBRA3": value_servico
                        };
                        $cart.addLabelServicos('S_LBRA3',obs);
                        $scope.checked_sBra3= true;
                    }else if($localStorage.getObject('S_LBRA4').S_LBRA4.length==0){
                        obs = {
                            "S_LBRA4": value_servico
                        };
                        $cart.addLabelServicos('S_LBRA4',obs);
                        $scope.checked_sBra4= true;
                    }else if($localStorage.getObject('S_LBRA5').S_LBRA5.length==0){
                        obs = {
                            "S_LBRA5": value_servico
                        };
                        $cart.addLabelServicos('S_LBRA5',obs);
                        $scope.checked_sBra5= true;
                    }

                    for(var i in u){
                        u[i] = false;
                    }
                    $scope.modalLabel.hide();
                }else{
                    $cordovaToast.show('Não é possivel selecionar mais que 5 serviços, verifique e tente novamente.', 'long', 'top');
                }

            };

            $scope.openModalLabel = function(ser) {
                var obser = {};

                console.log('labels',$localStorage.getObject('S_BRA1').S_BRA1);
                if($localStorage.getObject('S_BRA1').S_BRA1.length==0){
                    obser = {
                        "S_BRA1": ser
                    };
                    $cart.addLabelServicos('S_BRA1',obser);
                    $scope.modalLabel.show();
                }else if($localStorage.getObject('S_BRA2').S_BRA2.length==0){
                    if(ser == $localStorage.getObject('S_BRA1').S_BRA1){
                        $cordovaToast.show('Você já adicionou esse serviço', 'long', 'top');
                    }else{
                        obser = {
                            "S_BRA2": ser
                        };
                        $cart.addLabelServicos('S_BRA2',obser);
                        $scope.modalLabel.show();
                    }
                }else if($localStorage.getObject('S_BRA3').S_BRA3.length==0){
                    if(ser == $localStorage.getObject('S_BRA1').S_BRA1 || ser == $localStorage.getObject('S_BRA2').S_BRA2){
                        $cordovaToast.show('Você já adicionou esse serviço', 'long', 'top');
                    }else {
                        obser = {
                            "S_BRA3": ser
                        };
                        $cart.addLabelServicos('S_BRA3', obser);
                        $scope.modalLabel.show();
                    }
                }else if($localStorage.getObject('S_BRA4').S_BRA4.length==0){
                    if(ser == $localStorage.getObject('S_BRA1').S_BRA1 || ser == $localStorage.getObject('S_BRA2').S_BRA2 ||
                        ser == $localStorage.getObject('S_BRA3').S_BRA3){
                        $cordovaToast.show('Você já adicionou esse serviço', 'long', 'top');
                    }else {
                        obser = {
                            "S_BRA4": ser
                        };
                        $cart.addLabelServicos('S_BRA4', obser);
                        $scope.modalLabel.show();
                    }
                }else if($localStorage.getObject('S_BRA5').S_BRA5.length==0){
                    if(ser == $localStorage.getObject('S_BRA1').S_BRA1 || ser == $localStorage.getObject('S_BRA2').S_BRA2 ||
                        ser == $localStorage.getObject('S_BRA3').S_BRA3 || ser == $localStorage.getObject('S_BRA4').S_BRA4){
                        $cordovaToast.show('Você já adicionou esse serviço', 'long', 'top');
                    }else {
                        obser = {
                            "S_BRA5": ser
                        };
                        $cart.addLabelServicos('S_BRA5', obser);
                        $scope.modalLabel.show();
                    }
                }else{
                    $cordovaToast.show('Você já adicionou 5 serviços', 'long', 'top');
                }
            };



            $scope.fecharLabel = function (u) {
                for(var i in u){
                    u[i] = false;
                }
                $scope.modalLabel.hide();
            };

            $scope.goToSignature = function () {
                $state.go('deliveryman.signature',{id:$stateParams.id,index:$stateParams.index});
            };

            $scope.goToDeliveryClose = function () {
                $ionicPopup.confirm({
                    title: 'Atenção',
                    template: 'Deseja fechar esta Ordem?'
                }).then(function(res) {

                    if(res) {
                        $ionicLoading.show({
                            template: '<ion-spinner></ion-spinner><br> Aguarde ...'
                        });
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

                                    var s_ala =  $localStorage.getObject('S_ALA');
                                    var s_sen =  $localStorage.getObject('S_SEN');
                                    var s_com =  $localStorage.getObject('S_COM');
                                    var s_mon =  $localStorage.getObject('S_MON');
                                    var s_bat =  $localStorage.getObject('S_BAT');
                                    var s_bats =  $localStorage.getObject('S_BATS');
                                    var s_sir =  $localStorage.getObject('S_SIR');
                                    var s_mod =  $localStorage.getObject('S_MOD');
                                    var s_disp =  $localStorage.getObject('S_DISP');
                                    var s_senha =  $localStorage.getObject('S_SENHA');
                                    var s_ene =  $localStorage.getObject('S_ENE');
                                    var s_cabo =  $localStorage.getObject('S_CABO');
                                    var s_outa =  $localStorage.getObject('S_OUTA');
                                    var s_cam =  $localStorage.getObject('S_CAM');
                                    var s_camv =  $localStorage.getObject('S_CAMV');
                                    var s_grav =  $localStorage.getObject('S_GRAV');
                                    var s_ace =  $localStorage.getObject('S_ACE');
                                    var s_stand =  $localStorage.getObject('S_STAND');
                                    var s_cerca =  $localStorage.getObject('S_CERCA');
                                    var s_haste =  $localStorage.getObject('S_HASTE');
                                    var s_mola =  $localStorage.getObject('S_MOLA');
                                    var s_fio =  $localStorage.getObject('S_FIO');
                                    var s_radio =  $localStorage.getObject('S_RADIO');
                                    var s_radioo =  $localStorage.getObject('S_RADIOO');
                                    var s_fibra =  $localStorage.getObject('S_FIBRA');
                                    var s_fibrao =  $localStorage.getObject('S_FIBRAO');
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

                                    if(s_lbra1.S_LBRA1.length==0){
                                        s_lbra1.S_LBRA1 = {};
                                    }
                                    if(s_lbra2.S_LBRA2.length==0){
                                        s_lbra2.S_LBRA2 = {};
                                    }
                                    if(s_lbra3.S_LBRA3.length==0){
                                        s_lbra3.S_LBRA3 = {};
                                    }
                                    if(s_lbra4.S_LBRA4.length==0){
                                        s_lbra4.S_LBRA4 = {};
                                    }
                                    if(s_lbra5.S_LBRA5.length==0){
                                        s_lbra5.S_LBRA5 = {};
                                    }

                                    if(s_bra1.S_BRA1.length==0){
                                        s_bra1.S_BRA1 = {};
                                    }
                                    if(s_bra2.S_BRA2.length==0){
                                        s_bra2.S_BRA2 = {};
                                    }
                                    if(s_bra3.S_BRA3.length==0){
                                        s_bra3.S_BRA3 = {};
                                    }
                                    if(s_bra4.S_BRA4.length==0){
                                        s_bra4.S_BRA4 = {};
                                    }
                                    if(s_bra5.S_BRA5.length==0){
                                        s_bra5.S_BRA5 = {};
                                    }

                                    var  s = {
                                        'S_ALA':s_ala.S_ALA,
                                        'S_SEN':s_sen.S_SEN,
                                        'S_COM':s_com.S_COM,
                                        'S_MON':s_mon.S_MON,
                                        'S_BAT':s_bat.S_BAT,
                                        'S_BATS':s_bats.S_BATS,
                                        'S_SIR':s_sir.S_SIR,
                                        'S_MOD':s_mod.S_MOD,
                                        'S_DISP':s_disp.S_DISP,
                                        'S_SENHA':s_senha.S_SENHA,
                                        'S_ENE':s_ene.S_ENE,
                                        'S_CABO':s_cabo.S_CABO,
                                        'S_OUTA':s_outa.S_OUTA,
                                        'S_CAM':s_cam.S_CAM,
                                        'S_CAMV':s_camv.S_CAMV,
                                        'S_GRAV':s_grav.S_GRAV,
                                        'S_ACE':s_ace.S_ACE,
                                        'S_STAND':s_stand.S_STAND,
                                        'S_CERCA':s_cerca.S_CERCA,
                                        'S_HASTE':s_haste.S_HASTE,
                                        'S_MOLA':s_mola.S_MOLA,
                                        'S_FIO':s_fio.S_FIO,
                                        'S_RADIO':s_radio.S_RADIO,
                                        'S_RADIOO':s_radioo.S_RADIOO,
                                        'S_FIBRA':s_fibra.S_FIBRA,
                                        'S_FIBRAO':s_fibrao.S_FIBRAO

                                    };

                                    console.log('servico',s);

                                    var v = {veiculo: angular.copy($scope.veiculo)};

                                    var  ax = {auxiliary: angular.copy($scope.auxiliary)};
                                    console.log('o',o);
                                    angular.forEach(ax.auxiliary,function (item) {
                                        item.CODFUN = item.id
                                    });
                                    console.log(ax);

                                    var serv = '';
                                    if($scope.order.service!=null && $scope.order.service!=''){
                                        serv = $scope.order.service;
                                    }else {
                                        serv = null;
                                    }
                                    var or = {
                                        id: $stateParams.id,
                                        lat: lat,
                                        long: long,
                                        service: serv,
                                        items: null,
                                        auxiliary:ax.auxiliary,
                                        status: 2,
                                        close: Sincronizar.dataHojeSql(),
                                        data: Sincronizar.dataHoje(),
                                        servicos: s,
                                        veiculo: v.veiculo,
                                        kmInicio: $scope.kmInicial,
                                        kmFinal: $scope.kmFinal
                                    };

                                    $cart.addClose(or);

                                    console.log(or);
                                    console.log('indice',$scope.index);
                                    $cart.removeOrders($scope.index);
                                    var qtd = $localStorage.get('qtdOrder');

                                    if(qtd > 0){
                                        var q = qtd - 1;
                                        $localStorage.set('qtdOrder',q);
                                    }

                                    $ionicLoading.hide();
                                    $cordovaToast.show('Ordem nº '+$scope.order.id+' fechada com sucesso ', 'long', 'top');
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
                                }, function(err) {
                                    console.log('error',err);
                                    $ionicLoading.hide();
                                    $cordovaToast.show('Não foi possivel capturar sua localização, habilite o GPS', 'long', 'top');
                                });
                    } else {
                        $ionicLoading.hide();
                    }
                });
            };
        }]);
