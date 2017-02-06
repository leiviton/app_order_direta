angular.module('starter.controllers')
    .controller('DeliverymanCheckoutFibraCtrl',[
        '$scope','$state','$stateParams','$cart','ClientOrder',
        '$ionicLoading','$ionicPopup','Cupom','$cordovaBarcodeScanner',
        'User','$localStorage','DeliverymanOrder','$cordovaGeolocation','ionicToast','Sincronizar',
        function ($scope,$state,$stateParams,$cart,ClientOrder,
                  $ionicLoading,$ionicPopup,Cupom,$cordovaBarcodeScanner,
                  User,$localStorage,DeliverymanOrder,$cordovaGeolocation,ionicToast,Sincronizar) {


            $scope.validation = 0;
            var indice = $localStorage.get('close_index');

            $scope.servico = $localStorage.getObject('servicos');

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

            $scope.order = orders;

            for (var i=0;i < orders.length;i++){
                if (orders[i].id == $stateParams.id){
                    $scope.order = orders;
                }
            }

            console.log('order',$scope.order);
            console.log($stateParams.id);
            $scope.removeItem = function (i) {
                $cart.removeItem(i);
                $scope.items.splice(i,1);
            };


            $scope.openListProducts = function () {
                $state.go('deliveryman.view_product_fibra');
            };

            $scope.openProductDetail = function (i) {
                $state.go('deliveryman.checkout_item_detail',{index:i});
            };


            $scope.goToDeliveryClose = function () {
                $ionicPopup.confirm({
                    title: 'Atenção',
                    template: 'Deseja fechar esta Ordem?'
                }).then(function(res) {
                    $ionicLoading.show({
                        template: 'Enviando...'
                    });
                    if(res) {
                        var v = $cart.get().items;
                        for (var i=0;i<v.length;i++){
                            if(v[i].serial==null || v[i].serial==''){
                                $scope.validation = $scope.validation + 1;
                            }
                        }

                        if (v.length==0){
                            $ionicLoading.hide();
                            ionicToast.show('Voce não adicionou produtos a ordem', 'middle', false, 3500);

                        }else if ($scope.validation>0){
                            $ionicLoading.hide();
                            ionicToast.show('Voce não adicionou serial em todos os produtos', 'middle', false, 3500);

                        }else if($scope.validation==0){
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

                                    var  s = {servicos: $scope.servico.items};


                                    var  ax = {auxiliary: angular.copy($scope.auxiliary)};
                                    console.log('o',o);
                                    angular.forEach(ax.auxiliary,function (item) {
                                        item.auxiliary_id = item.id;
                                    });

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
                                        servicos: s.servicos
                                    };

                                    $cart.addClose(or);
                                    $cart.removeOrders(indice);
                                    var qtd = $localStorage.get('qtdOrder');


                                    if(qtd > 0){
                                        var q = qtd - 1;
                                        $localStorage.set('qtdOrder',q);
                                    }
                                    $ionicLoading.hide();
                                    $state.go('deliveryman.checkout_successful');
                                    console.log(ax);
                                    // DeliverymanOrder.updateStatus({id: $stateParams.id}, {
                                    //     status: 2,
                                    //     lat: lat,
                                    //     long: long,
                                    //     service: orders.service,
                                    //     items: o.items,
                                    //     auxiliary:ax.auxiliary
                                    // },function (data) {
                                    //     $ionicLoading.hide();
                                    //     $state.go('deliveryman.checkout_successful');
                                    // });
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
