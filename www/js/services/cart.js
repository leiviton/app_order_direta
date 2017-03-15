
angular.module('starter.services')
    .service('$cart',['$localStorage',function ($localStorage) {
        var key = 'cart', cartAux = $localStorage.getObject(key);
        var key1 = 'auxiliar', aux = $localStorage.getObject(key1);
        var key2 = 'orders_close', oax = $localStorage.getObject(key2);
        var key3 = 'order_close', oc = $localStorage.getObject(key3);
        var key4 = 'login', log = $localStorage.getObject(key4);
        var key5 = 'orders', orders = $localStorage.getObject(key5);
        var key6 = 'notification', notification = $localStorage.getObject(key6);
        var key7 = 'notification_read', notificationread = $localStorage.getObject(key7);
        var key8 = 'sincronizado', sinc = $localStorage.get(key8);
        var key9 = 'orders_iniciadas', inic = $localStorage.getObject(key9);
        var key10 = 'close_index', index = $localStorage.get(key10);
        var key11 = 'qtdOrder', qtd = $localStorage.get(key11);
        var key12 = 'produtos_fibra', prodfb = $localStorage.getObject(key12);
        var key13 = 'produtos_radio', prodrd = $localStorage.getObject(key13);
        var key14 = 'produtos_seguranca', prodsg = $localStorage.getObject(key14);
        var key15 = 'orders_devolvidas', odev = $localStorage.getObject(key15);
        var key16 = 'visitas',v = $localStorage.getObject(key16);
        var key17 = 'auxiliary',a = $localStorage.getObject(key17);
        var key18 = 'servicos', ser = $localStorage.getObject(key18);
        var key19 = 'veiculos', veiculos = $localStorage.getObject(key19);
        var key20 = 'veiculo_order', veiculo = $localStorage.getObject(key20);
        var key21 = 'var_servico', var_servico = $localStorage.get(key21);
        var key22 = 'S_ALA',S_ALA = $localStorage.getObject(key22);
        var key23 = 'S_SEN',S_SEN = $localStorage.getObject(key23);
        var key24 = 'S_MON',S_MON = $localStorage.getObject(key24);
        var key25 = 'S_BAT',S_BAT = $localStorage.getObject(key25);
        var key26 = 'S_BATS',S_BATS = $localStorage.getObject(key26);
        var key27 = 'S_SIR',S_SIR = $localStorage.getObject(key27);
        var key28 = 'S_MOD',S_MOD = $localStorage.getObject(key28);
        var key29 = 'S_DISP',S_DISP = $localStorage.getObject(key29);
        var key30 = 'S_SENHA',S_SENHA = $localStorage.getObject(key30);
        var key31 = 'S_ENE',S_ENE = $localStorage.getObject(key31);
        var key32 = 'S_CABO',S_CABO = $localStorage.getObject(key32);
        var key33 = 'S_OUTA',S_OUTA = $localStorage.getObject(key33);
        var key34 = 'S_CAM',S_CAM = $localStorage.getObject(key34);
        var key35 = 'S_CAMV',S_CAMV = $localStorage.getObject(key35);
        var key36 = 'S_GRAV',S_GRAV = $localStorage.getObject(key36);
        var key37 = 'S_ACE',S_ACE = $localStorage.getObject(key37);
        var key38 = 'S_STAND',S_STAND = $localStorage.getObject(key38);
        var key39 = 'S_CERCA',S_CERCA = $localStorage.getObject(key39);
        var key40 = 'S_HASTE',S_HASTE = $localStorage.getObject(key40);
        var key41 = 'S_MOLA',S_MOLA = $localStorage.getObject(key41);
        var key42 = 'S_FIO',S_FIO = $localStorage.getObject(key42);
        var key43 = 'S_RADIO',S_RADIO = $localStorage.getObject(key43);
        var key44 = 'S_RADIOO',S_RADIOO = $localStorage.getObject(key44);
        var key45 = 'S_FIBRA',S_FIBRA = $localStorage.getObject(key45);
        var key46 = 'S_FIBRAO',S_FIBRAO = $localStorage.getObject(key46);
        var key47 = 'S_COM',S_COM = $localStorage.getObject(key47);
        var key48 = 'ultimo_login',ultimo = $localStorage.getObject(key48);
        var key49 = 'order_iniciada',o_ini = $localStorage.getObject(key49);
        var key50 = 'index_inicio',index_inicio = $localStorage.get(key50);
        var key51 = 'km_inicial',km_inicial = $localStorage.get(key51);
        var key52 = 'km_final',km_final = $localStorage.get(key52);
        var key53 = 'S_LBRA1', S_LBRA1 = $localStorage.getObject(key53);
        var key54 = 'S_BRA1', S_BRA1 = $localStorage.getObject(key54);
        var key55 = 'S_LBRA2', S_LBRA2 = $localStorage.getObject(key55);
        var key56 = 'S_BRA2', S_BRA2 = $localStorage.getObject(key56);
        var key57 = 'S_LBRA3', S_LBRA3 = $localStorage.getObject(key57);
        var key58 = 'S_BRA3', S_BRA3 = $localStorage.getObject(key58);
        var key59 = 'S_LBRA4', S_LBRA4 = $localStorage.getObject(key59);
        var key60 = 'S_BRA4', S_BRA4 = $localStorage.getObject(key60);
        var key61 = 'S_LBRA5', S_LBRA5 = $localStorage.getObject(key61);
        var key62 = 'S_BRA5', S_BRA5 = $localStorage.getObject(key62);
        var key63 = 'truncate', truncate = $localStorage.get(key63);
        var key64 = 'attendance', attendance = $localStorage.get(key64);

        if (!attendance){
            initAttendance();
        }
        if (!truncate){
            initTruncate();
        }

        if(!S_LBRA1){
            initLabel1();
        }
        if(!S_BRA1){
            initBra1();
        }
        if(!S_LBRA2){
            initLabel2();
        }
        if(!S_BRA2){
            initBra2();
        }
        if(!S_LBRA3){
            initLabel3();
        }
        if(!S_BRA3){
            initBra3();
        }
        if(!S_LBRA4){
            initLabel4();
        }
        if(!S_BRA4){
            initBra4();
        }
        if(!S_LBRA5){
            initLabel5();
        }
        if(!S_BRA5){
            initBra5();
        }
        if(!km_inicial){
            initKmInicial();
        }
        if (!km_final){
            initKmFinal();
        }
        if(!index_inicio){
            initIndexInicio();
        }
        if(!o_ini){
            initOini();
        }
        if (!ultimo){
            initUltimo();
        }
        if(!S_ALA){
            initS_ALA();
        }
        if(!S_SEN){
            initS_SEN();
        }
        if(!S_COM){
            initS_COM();
        }
        if(!S_MON){
            initS_MON();
        }
        if(!S_BAT){
            initS_BAT();
        }
        if(!S_ALA){
            initS_ALA();
        }
        if(!S_BATS){
            initS_BATS();
        }
        if(!S_SIR){
            initS_SIR();
        }
        if(!S_MOD){
            initS_MOD();
        }
        if(!S_DISP){
            initS_DISP();
        }
        if(!S_SENHA){
            initS_SENHA();
        }
        if(!S_ENE){
            initS_ENE();
        }
        if(!S_CABO){
            initS_CABO();
        }
        if(!S_OUTA){
            initS_OUTA();
        }
        if(!S_CAM){
            initS_CAM();
        }
        if(!S_ALA){
            initS_ALA();
        }
        if(!S_CAMV){
            initS_CAMV();
        }
        if(!S_GRAV){
            initS_GRAV();
        }
        if(!S_ACE){
            initS_ACE();
        }
        if(!S_STAND){
            initS_STAND();
        }
        if(!S_CERCA){
            initS_CERCA();
        }
        if(!S_HASTE){
            initS_HASTE();
        }
        if(!S_MOLA){
            initS_MOLA();
        }
        if(!S_FIO){
            initS_FIO();
        }
        if(!S_RADIO){
            initS_RADIO();
        }
        if(!S_RADIOO){
            initS_RADIOO();
        }
        if(!S_FIBRA){
            initS_FIBRA();
        }
        if(!S_FIBRAO){
            initS_FIBRAO();
        }
        if(!S_COM){
            initS_COM();
        }

        if(!veiculos){
            initVeiculos();
        }
        if (!var_servico) {
            initVarServico();
        }

        if(!veiculo){
            initVeiculoOrder();
        }

        if(!ser){
            initServicos();
        }
        if(!v){
            initVisita();
        }
        if(!a){
            initAuxiliary();
        }
        if(!odev){
            initDevol();
        }
        if(!qtd){
            initQtd();
        }
        if(!prodfb){
            initFibra();
        }
        if(!prodrd){
            initRadio();
        }
        if(!prodsg){
            initSeguranca();
        }
        if(!cartAux){
            initCart();
        }
        if(!index){
            initIndex();
        }
        if(!aux){
            initAux();
        }
        if(!oax){
            initOx();
        }
        if(!oc){
            initOc();
        }
        if(!log){
            initLogin();
        }
        if(!orders){
            initOrders();
        }
        if(!notification){
            initNot();
        }
        if(!notificationread){
            initNotRead();
        }
        if(!sinc){
            initSinc();
        }
        if(!inic){
            initInic();
        }

        this.limpaVarServico = function () {
            initVarServico();
        };

        this.clear = function () {
            initCart();

            initOc();

            initServicos();

            initVeiculoOrder();

            initAux();

            initS_ALA();

            initS_SEN();

            initS_COM();

            initS_MON();

            initS_BAT();

            initS_ALA();

            initS_BATS();

            initS_SIR();

            initS_MOD();

            initS_DISP();

            initS_SENHA();

            initS_ENE();

            initS_CABO();

            initS_OUTA();

            initS_CAM();

            initS_ALA();

            initS_CAMV();

            initS_GRAV();

            initS_ACE();

            initS_STAND();

            initS_CERCA();

            initS_HASTE();

            initS_MOLA();

            initS_FIO();

            initS_RADIO();

            initS_RADIOO();

            initS_FIBRA();

            initS_FIBRAO();

            initS_COM();

            initBra1();

            initBra2();

            initBra3();

            initBra4();

            initBra5();

            initLabel1();

            initLabel2();

            initLabel3();

            initLabel4();

            initLabel5();

        };

        this.clearOrder = function () {
            initOrders();
            initNot();
            initQtd();
        };

        this.clearClose = function () {
                initInic();

                initOx();

                initNotRead();

                initDevol();

                initVisita();
        };

        this.clearKms = function () {
            initKmFinal();
            initKmInicial();
        };

        this.clearIndex = function () {
            initIndex();
        };

        this.clearLogin = function () {
            initLogin();
        };

        this.clearNotification = function () {
            initNotRead();
        };
        this.get = function () {
            return $localStorage.getObject(key);
        };
        this.getAux = function () {
            return $localStorage.getObject(key1);
        };
        this.getNotification = function () {
            return $localStorage.getObject(key6);
        };
        this.getNot = function () {
            return $localStorage.getObject(key7);//notification_read
        };

        //get orders
        this.getVisita = function () {
            return $localStorage.getObject(key16);//visita
        };
        this.getDevol = function () {
            return $localStorage.getObject(key15);//orders_devolvidas
        };
        this.getInic = function () {
            return $localStorage.getObject(key9);//orders_iniciadas
        };
        this.getClose = function () {
            return $localStorage.getObject(key2);//orders_close
        };
        this.getOrder = function () {
            return $localStorage.getObject(key5);
        };
        this.getItem = function (i) {
            return this.get().items[i];
        };
        this.getServicos = function () {
            return $localStorage.get(key18);
        };

        this.getVeiculo = function () {
            return $localStorage.get(key19);
        };

        this.getVeiculoOrder = function () {
            return $localStorage.get(key20);
        };
        this.addItem = function (item) {
            var cart = this.get(), itemAux, exists = false;
            for (var index in cart.items){
                itemAux = cart.items[index];
                if (itemAux.id == item.id){
                    itemAux.serial = item.serial;
                    itemAux.subTotal = calculateSubtotal(itemAux);
                    exists = true;
                    break;
                }
            }
            if (!exists){
                cart.items.push(item);
            }
            $localStorage.setObject(key,cart);
        };
        //auxiliares
        this.addAux = function (item) {
            var cart = this.getAux(), itemAux, exists = false;
            for (var index in cart.auxiliar){
                itemAux = cart.auxiliar[index];
                if (itemAux.id == item.id){
                    exists = true;
                    break;
                }
            }
            if (!exists){
                cart.auxiliar.push(item);
            }
            $localStorage.setObject(key1,cart);
        };

        //notification
        this.addNot = function (item,o) {
            var cart = this.getNot(), itemAux, exists = false;
            for (var index in cart.items){
                itemAux = cart.items[index];
                if (itemAux.id == item.id){
                    itemAux.confirmation = o;
                    exists = true;
                    break;
                }
            }
            if (!exists){
                cart.items.push(item);
            }
            $localStorage.setObject(key7,cart);
        };
        //servicos
        this.addVarServicos = function (item) {
            var cart;
            cart = item;
            $localStorage.set(key21,cart);
        };

        this.addServicos = function (key,item) {
            var cart = item;

            $localStorage.setObject(key,cart);
         };
        this.addLabelServicos = function (key,item) {
            var cart = item;

            $localStorage.setObject(key,cart);
        };
        //iniciadas
        this.addIni = function (item) {
            var cart = this.getInic(), itemAux, exists = false;
            for (var index in cart.items){
                itemAux = cart.items[index];
                if (itemAux.id == item.id){
                    exists = true;
                    break;
                }
            }
            if (!exists){
                cart.items.push(item);
            }
            $localStorage.setObject(key9,cart);
        };

        //veiculos
        this.addVeiculo = function (item) {
            var cart = item;
            $localStorage.setObject(key20,cart);
        };

        this.addKmInicial = function (km) {
            $localStorage.set(key51,km);
        };

        this.addKmFinal = function (km) {
            $localStorage.set(key52,km);
        };

        //add orders fechadas
        this.addClose = function (item) {
            var cart = this.getClose(), itemAux, exists = false;
            for (var index in cart.items){
                itemAux = cart.items[index];
                if (itemAux.id == item.id){
                    exists = true;
                    break;
                }
            }
            if (!exists){
                cart.items.push(item);
            }
            $localStorage.setObject(key2,cart);
        };
        //add orders devolvidas
        this.addDevol = function (item) {
            var cart = this.getDevol(), itemAux, exists = false;
            for (var index in cart.items){
                itemAux = cart.items[index];
                if (itemAux.id == item.id){
                    exists = true;
                    break;
                }
            }
            if (!exists){
                cart.items.push(item);
            }
            $localStorage.setObject(key15,cart);
        };
        //add orders visitas
        this.addVisitas = function (item) {
            var cart = this.getVisita(), itemAux;
            for (var index in cart.items){
                itemAux = cart.items[index];
            }
            cart.items.push(item);

            $localStorage.setObject(key16,cart);
        };
        this.removeAux = function (i) {
            var aux = this.getAux();
            aux.auxiliar.splice(i,1);
            $localStorage.setObject(key1,aux);
        };

        this.removeItem = function (i) {
            var cart = this.get();
            cart.items.splice(i,1);
            cart.total = getTotal(cart.items);
            $localStorage.setObject(key,cart);
        };

        this.removeNotification = function (i) {
            var cart = this.getNotification();
            cart.items.splice(i,1);
            $localStorage.setObject(key6,cart);
        };

        this.removeOrders = function (i) {
            var cart = this.getOrder();
            cart.items.splice(i,1);
            $localStorage.setObject(key5,cart);
        };

        this.updateStatus = function(i, status){
            var cart = this.getOrder(),
                itemAux = cart.items[i];

            itemAux.status = status;
            $localStorage.setObject(key5,cart);
        };

        this.updateSerial = function(i, serial){
            var cart = this.get(),
                itemAux = cart.items[i];
            itemAux.serial = serial;
            $localStorage.setObject(key,cart);
        };

        this.saveKm = function(km){
            var cart = this.getVeiculoOrder();
            cart.MARCADOR = km;
            $localStorage.setObject(key20,cart);
        };

        this.updateServico = function(value){
            var cart = this.getServicos();

            cart.S_ALA = value;
            $localStorage.setObject(key18,cart);
        };

        this.setQtd = function (value) {
            var qtd = value;
            $localStorage.set(key11,qtd);
        };

        this.setCupom = function (code,value) {
            var cart = this.get();
            cart.cupom = {
                code: code,
                value: value
            };
            $localStorage.setObject(key,cart);
        };

        this.removeCupom = function () {
            var cart = this.get();
            cart.cupom = {
                code:null,
                value:null
            };
            $localStorage.setObject(key,cart);

        };

        function calculateSubtotal(item) {
            return item.price * item.qtd;
        }
        
        function getTotal(items) {
            var sum = 0;
            angular.forEach(items,function (item) {
                sum += item.subTotal;
            });
            return sum;
        }
        
        function initCart() {
            $localStorage.setObject(key,{
                items:[]
            });
        }

        function initAux() {
            $localStorage.setObject(key1,{
                auxiliar:[]
            });
        }

        function initOx() {
            $localStorage.setObject(key2,{
                items:[]
            });
        }

        function initOc() {
            $localStorage.setObject(key3,{
                items:[]
            });
        }

        function initLogin() {
            $localStorage.setObject(key4,null);
        }

        function initOrders() {
            $localStorage.setObject(key5,{
                items:[]
            });
        }

        function initNot() {
            $localStorage.setObject(key6,{
                items:[]
            });
        }

        function initNotRead() {
            $localStorage.setObject(key7,{
                items:[]
            });
        }

        function initSinc() {
            $localStorage.set(key8,
               '10/10/2016 15h00');
        }

        function initInic() {
            $localStorage.setObject(key9,{
                items:[]
            })
        }
        function initIndex() {
            $localStorage.set(key10,null)
        }

        function initQtd() {
            $localStorage.set(key11,null);
        }

        function initFibra() {
            $localStorage.setObject(key12,{
                items:[]
            })
        }

        function initRadio() {
            $localStorage.setObject(key13,{
                items:[]
            })
        }

        function initSeguranca() {
            $localStorage.setObject(key14,{
                items:[]
            })
        }

        function initDevol() {
            $localStorage.setObject(key15,{
                items:[]
            })
        }

        function initVisita() {
            $localStorage.setObject(key16,{
                items:[]
            })
        }

        function initAuxiliary(){
            $localStorage.setObject(key17,{
                items:[]
            });
        }

        function initServicos() {
            $localStorage.setObject(key18,{
                items:[]
            });
        }

        function initVeiculos(){
            $localStorage.setObject(key19,{
                items:[]
            });
        }

        function initVeiculoOrder(){
            $localStorage.setObject(key20,null);
        }

        function initVarServico() {
            $localStorage.set(key21,null)
        }

        function initS_ALA() {
            $localStorage.setObject(key22,{})
        }
        function initS_SEN() {
            $localStorage.setObject(key23,{})
        }
        function initS_MON() {
            $localStorage.setObject(key24,{})
        }
        function initS_BAT() {
            $localStorage.setObject(key25,{})
        }
        function initS_BATS() {
            $localStorage.setObject(key26,{})
        }
        function initS_SIR() {
            $localStorage.setObject(key27,{})
        }
        function initS_MOD() {
            $localStorage.setObject(key28,{})
        }
        function initS_DISP() {
            $localStorage.setObject(key29,{})
        }
        function initS_SENHA() {
            $localStorage.setObject(key30,{})
        }
        function initS_ENE() {
            $localStorage.setObject(key31,{})
        }
        function initS_CABO() {
            $localStorage.setObject(key32,{})
        }
        function initS_OUTA() {
            $localStorage.setObject(key33,{})
        }
        function initS_CAM() {
            $localStorage.setObject(key34,{})
        }
        function initS_CAMV() {
            $localStorage.setObject(key35,{})
        }
        function initS_GRAV() {
            $localStorage.setObject(key36,{})
        }
        function initS_ACE() {
            $localStorage.setObject(key37,{})
        }
        function initS_STAND() {
            $localStorage.setObject(key38,{})
        }
        function initS_CERCA() {
            $localStorage.setObject(key39,{})
        }
        function initS_HASTE() {
            $localStorage.setObject(key40,{})
        }
        function initS_MOLA() {
            $localStorage.setObject(key41,{})
        }
        function initS_FIO() {
            $localStorage.setObject(key42,{})
        }
        function initS_RADIO() {
            $localStorage.setObject(key43,{})
        }
        function initS_RADIOO() {
            $localStorage.setObject(key44,{})
        }
        function initS_FIBRA() {
            $localStorage.setObject(key45,{})
        }
        function initS_FIBRAO() {
            $localStorage.setObject(key46,{})
        }
        function initS_COM() {
            $localStorage.setObject(key47,{})
        }
        function initUltimo() {
            $localStorage.setObject(key48,null);
        }
        function initOini() {
            $localStorage.setObject(key49,{items:[]});
        }
        function initIndexInicio() {
            $localStorage.set(key50,null)
        }
        function initKmInicial() {
            $localStorage.set(key51,0)
        }
        function initKmFinal() {
            $localStorage.set(key52,0)
        }
        function initLabel1() {
            $localStorage.setObject(key53,{"S_LBRA1":[]})
        }
        function initBra1() {
            $localStorage.setObject(key54,{"S_BRA1":[]})
        }
        function initLabel2() {
            $localStorage.setObject(key55,{"S_LBRA2":[]})
        }
        function initBra2() {
            $localStorage.setObject(key56,{"S_BRA2":[]})
        }
        function initLabel3() {
            $localStorage.setObject(key57,{"S_LBRA3":[]})
        }
        function initBra3() {
            $localStorage.setObject(key58,{"S_BRA3":[]})
        }
        function initLabel4() {
            $localStorage.setObject(key59,{"S_LBRA4":[]})
        }
        function initBra4() {
            $localStorage.setObject(key60,{"S_BRA4":[]})
        }
        function initLabel5() {
            $localStorage.setObject(key61,{"S_LBRA5":[]})
        }
        function initBra5() {
            $localStorage.setObject(key62,{"S_BRA5":[]})
        }

        function initTruncate() {
            $localStorage.set(key63,6);
        }
        function  initAttendance() {
            $localStorage.set(key63,0);
        }
    }]);