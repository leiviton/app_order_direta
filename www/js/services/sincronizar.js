angular.module('starter.services')
    .factory('Sincronizar',['$cart','$localStorage','DeliverymanOrder','$ionicPopup','Product','Auxiliary','Veiculo'
            ,function ($cart,$localStorage,DeliverymanOrder,$ionicPopup,Product,Auxiliary,Veiculo) {
            return {
                    sincronizar: function () {
                            var read = [];
                            var order = [];
                            var orini = [];
                            var devol = [];
                            var visita = [];


                            if ($cart.getNot().items.length > 0){
                                    read = $cart.getNot().items;
                            }else{
                                    read = null;
                            }

                            if ($cart.getClose().items.length > 0){
                                    order = $cart.getClose().items;
                            }else{
                                    order = null;
                            }

                            if($cart.getInic().items.length > 0){
                                    orini = $cart.getInic().items;
                            }else{
                                    orini = null;
                            }

                            if ($cart.getDevol().items.length > 0){
                                devol = $cart.getDevol().items;
                            }else{
                                devol = null;
                            }

                        if ($cart.getVisita().items.length > 0){
                            visita = $cart.getVisita().items;
                        }else{
                            visita = null;
                        }

                        var id_funcionario = $localStorage.getObject('user').funciona.data.id;
                        console.log('funcionario',id_funcionario);
                            this.getNotification();
                            var sinc = this.dataHojeSql();
                            DeliverymanOrder.updateNotification({
                                            notification: read,
                                            orders: order,
                                            orini: orini,
                                            ordevol: devol,
                                            visita: visita,
                                            sinc_at: sinc,
                                            id_funcionario: id_funcionario
                                    },function (data) {
                                            $localStorage.setObject('orders',{items:data.data});
                                            $cart.setQtd(data.data.length);
                                            $cart.clearClose();
                                            Auxiliary.query(function (data) {
                                                $localStorage.setObject('auxiliary',{items:data.data});
                                            },function (error) {
                                                console.log(error)
                                            });

                                            Veiculo.query(function (data) {
                                                $localStorage.setObject('veiculos',{items:data.data});
                                            },function (error) {
                                                console.log(error)
                                            });

                                    },function (error) {
                                            console.log(error)
                                    });

                            $localStorage.set('sincronizado',this.dataHoje());
                    },
                    getNotification: function () {

                                    DeliverymanOrder.countN({
                                            id: null,
                                            orderBy: 'created_at',
                                            sortedBy: 'asc'
                                    }, function (data) {
                                            $localStorage.setObject('notification', {items: data.data});
                                    });
                    },
                    dataHoje: function () {
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
                            var segundos = new Date().getSeconds();
                            if (segundos < 10) {
                                segundos = "0" + segundos;
                            }

                            var result = dia+"/"+mes+"/"+ano+" "+horas + ":" + minutos+":"+segundos;
                            return result;
                    },

                    truncate: function () {
                        var data = new Date();
                         var mes = data.getMonth() + 1;
                        return mes;
                    },
                    dataHojeSql: function () {
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
                        var segundos = new Date().getSeconds();
                        if (segundos < 10) {
                            segundos = "0" + segundos;
                        }
                        var result = ano+"-"+mes+"-"+dia+" "+horas + ":" + minutos +":"+segundos;
                        return result;
                    }
            }
}]);

/*DeliverymanOrder.count({id:null,status:0},function (data) {
 $localStorage.set('orders_pendentes_criticas',data[0]);
 });
 DeliverymanOrder.countD({id:null,status:0},function (data) {
 $localStorage.set('orders_pendentes_alta',data[0]);
 });
 DeliverymanOrder.countMi({id:null,status:2},function (data) {
 $localStorage.set('orders_fechadas_mes',data[0]);
 });
 DeliverymanOrder.countDi({id:null,status:2},function (data) {
 $localStorage.set('orders_fechadas_dia',data[0]);
 });
 Product.fibra(function (data) {
 $localStorage.setObject('produtos_fibra',{items:data.data});
 });
 Product.radio(function (data) {
 $localStorage.setObject('produtos_radio',{items:data.data});
 });
 Product.seguranca(function (data) {
 $localStorage.setObject('produtos_seguranca',{items:data.data});
 });*/