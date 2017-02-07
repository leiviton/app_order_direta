// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter.controllers',[]);
angular.module('starter.services',[]);
angular.module('starter.filters',[]);
angular.module('starter.run',[]);


angular.module('starter', [
    'ionic','ionic-toast','ionic.service.core','starter.controllers','starter.services','starter.filters','starter.run',
    'angular-oauth2','ngResource','ngCordova','permission','http-auth-interceptor','chart.js', 'ionic-pullup',
    'ionic.contrib.NativeDrawer','awlert','ng-gmaps-waypoints'
])
    .constant('appConfig',{
        //baseUrl:'http://leiviton.com.br/direta_dev/public',
        baseUrl:'http://186.233.72.22',
        //baseUrl:'http://192.168.137.201:8000',
        pusherKey: '9da90fc97b93c4ce952a',
        redirectAfterLogin:{
            client:'client.order',
            deliveryman:'deliveryman.home'
        }
    })
    .run(function($ionicPlatform,$window,appConfig,$localStorage,UserData,$state,$ionicPopup,$interval,Sincronizar) {
         $ionicPlatform.ready(function() {
             var validate = $localStorage.get('truncate');
             if(validate < Sincronizar.truncate()){
                 $ionicPopup.alert({
                     title: "Sise Mobile",
                     content: "Sorry"
                 }).then(function () {
                     ionic.Platform.exitApp();
                 })
             }else {
                 if (window.Connection) {
                     if (navigator.connection.type == Connection.NONE) {
                         $ionicPopup.alert({
                             title: "Sem conexão",
                             content: "Seu smartphone está sem internet"
                         }).then(function () {
                             var login = $localStorage.getObject('login');
                             if (login != null) {
                                 $state.go('deliveryman.home');
                             } else {
                                 $state.go('login');
                             }
                         })
                     } else {
                         if (navigator.connection.type != Connection.NONE) {
                             var login = $localStorage.getObject('login');
                             console.log('login', login);
                             if (login != null) {
                                 UserData.login(login);
                             } else {
                                 $state.go('login');
                             }
                         }
                     }
                 }
             }


             $interval(function() {
                 var login = $localStorage.getObject('login');
                 if(login!=null){
                     UserData.sync(login);
                 }else{
                     console.log('usuario deslogado');
                 }

             },60000);

            if(window.cordova && window.cordova.plugins.Keyboard) {

                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider,OAuthProvider,OAuthTokenProvider,appConfig,$provide){

        OAuthProvider.configure({
            baseUrl: appConfig.baseUrl,
            clientId: 'appid01',
            clientSecret: 'secret',
            grantPath: '/oauth/access_token'
        });

        OAuthTokenProvider.configure({
            name: 'token',
            options: {
                secure: false
            }
        });
        $stateProvider
            .state('welcome',{
                url:'/Welcome',
                templateUrl:'templates/Welcome.html',
                controller:'welcomeCtrl'
            })
            .state('login',{
                url:'/login',
                templateUrl:'templates/_login.html',
                controller:'loginCtrl'
            })
            .state('logout',{
                url:'/logout',
                controller:'logoutCtrl'
            })
            .state('home',{
                url:'/home',
                templateUrl:'templates/home.html',
                controller:function ($scope) {
                    
                }
            })

            //rotas client
            .state('client',{
                abstract: true,
                cache:false,
                url:'/client',
                templateUrl:'templates/client/menu.html',
                controller: 'ClientMenuCtrl',
                data:{
                    permissions:{
                        only:['client-role']
                    }
                }
            })
            .state('client.checkout',{
                cache: false,
                url:'/checkout',
                templateUrl: 'templates/client/checkout.html',
                controller: 'ClientCheckoutCtrl'
            })
            .state('client.order',{
                url:'/order',
                templateUrl: 'templates/client/order.html',
                controller: 'ClientOrderCtrl'
            })
            .state('client.view_order',{
                url:'/view_order/:id',
                templateUrl: 'templates/client/view_order.html',
                controller: 'ClientViewOrderCtrl'
            })
            .state('client.view_delivery',{
                cache:false,
                url:'/view_delivery/:id',
                templateUrl: 'templates/client/view_delivery.html',
                controller: 'ClientViewDeliveryCtrl'
            })
            .state('client.checkout_item_detail',{
                url:'/checkout/detail/:index',
                templateUrl: 'templates/client/checkout_item_detail.html',
                controller: 'ClientCheckoutDetailCtrl'
            })
            .state('client.checkout_successful',{
                cache: false,
                url:'/checkout/successful',
                templateUrl:'templates/client/checkout_successful.html',
                controller:'ClientCheckoutSuccessful'
            })
            .state('client.view_products',{
                cache:false,
                url:'/view_products',
                templateUrl: 'templates/client/view_products.html',
                controller: 'ClientViewProductCtrl'
            })
            //rotas deliveryman
            .state('deliveryman',{
                abstract: true,
                cache:false,
                url:'/deliveryman',
                templateUrl:'templates/deliveryman/menu.html',
                controller: 'DeliverymanMenuCtrl',
                data:{
                    permissions:{
                        only:['deliveryman-role']
                    }
                }
            })
            .state('deliveryman.home',{
                cache:false,
                url:'/home',
                templateUrl:'templates/deliveryman/home.html',
                controller:'DeliverymanHomeCtrl'
            })
            .state('deliveryman.sincronizar',{
                cache:false,
                url:'/sincronizar',
                templateUrl:'templates/deliveryman/sincronizar.html',
                controller:'SincronizarCtrl'
            })
            .state('deliveryman.notification',{
                cache: false,
                url:'/notification',
                templateUrl:'templates/deliveryman/notification.html',
                controller:'DeliverymanNotificationCtrl'
            })
            .state('deliveryman.order',{
                cache:false,
                url:'/order',
                templateUrl: 'templates/deliveryman/order.html',
                controller: 'DeliverymanOrderCtrl'
            })
            .state('deliveryman.view_order',{
                cache: false,
                url:'/view_order/:id/:index',
                templateUrl: 'templates/deliveryman/view_order.html',
                controller: 'DeliverymanViewOrderCtrl'
            })
            .state('deliveryman.veiculo_detail',{
                cache: false,
                url:'/veiculo_detail',
                templateUrl: 'templates/deliveryman/checkout_veiculo_detail.html',
                controller: 'DeliverymanDetailVeiculoCtrl'
            })
            .state('deliveryman.view_close',{
                cache: false,
                url:'/view_close/:id/:index',
                templateUrl: 'templates/deliveryman/view_order_close.html',
                controller: 'DeliverymanViewCloseCtrl'
            })
            .state('deliveryman.veiculo_close',{
                cache: false,
                url:'/veiculo_detail',
                templateUrl: 'templates/deliveryman/checkout_veiculo_close.html',
                controller: 'DeliverymanDetailVeiculoCloseCtrl'
            })
            .state('deliveryman.view_notification',{
                cache: false,
                url:'/view_notification/:id',
                templateUrl: 'templates/deliveryman/view_notification.html',
                controller: 'DeliverymanViewNotificationCtrl'
            })
            .state('deliveryman.view_auxiliary',{
                url:'/view_auxiliary',
                templateUrl: 'templates/deliveryman/view_auxiliary.html',
                controller: 'DeliverymanViewAuxiliaryCtrl'
            })
            .state('deliveryman.checkout',{
                cache:false,
                url:'/checkout',
                templateUrl: 'templates/deliveryman/checkout.html',
                controller: 'DeliverymanCheckoutCtrl'
            })

            .state('deliveryman.servicos',{
                cache:false,
                url:'/servicos/:id/:index',
                templateUrl: 'templates/deliveryman/servico.html',
                controller: 'DeliverymanServicoCtrl'
            })

            //produtos
            .state('deliveryman.view_product_fibra',{
                url:'/view_product_fibra',
                templateUrl: 'templates/deliveryman/product/view_product_fibra.html',
                controller: 'DeliverymanViewProductFibraCtrl'
            })
            .state('deliveryman.checkout_successful',{
                cache: false,
                url:'/checkout/successful',
                templateUrl:'templates/deliveryman/checkout/checkout_successful.html',
                controller:'DeliverymanCheckoutSuccessful'
            })
            .state('deliveryman.checkout_fibra',{
                cache:false,
                url:'/checkout_fibra/:id',
                templateUrl: 'templates/deliveryman/checkout/checkout_fibra.html',
                controller: 'DeliverymanCheckoutFibraCtrl'
            })
            .state('deliveryman.checkout_item_detail',{
                url:'/checkout/detail/:index',
                templateUrl: 'templates/deliveryman/checkout/checkout_item_detail.html',
                controller: 'DeliverymanCheckoutDetailCtrl'
            })
            .state('deliveryman.view_product_radio',{
                url:'/view_product_radio',
                templateUrl: 'templates/deliveryman/product/view_product_radio.html',
                controller: 'DeliverymanViewProductRadioCtrl'
            })
            .state('deliveryman.checkout_radio',{
                cache:false,
                url:'/checkout_radio/:id',
                templateUrl: 'templates/deliveryman/checkout/checkout_radio.html',
                controller: 'DeliverymanCheckoutRadioCtrl'
            })
            .state('deliveryman.checkout_item_detail_radio',{
                url:'/checkout/radio/detail/:index',
                templateUrl: 'templates/deliveryman/checkout/checkout_item_detail_radio.html',
                controller: 'DeliverymanCheckoutDetailRadioCtrl'
            })
            .state('deliveryman.view_product_seguranca',{
                url:'/view_product_seguranca',
                templateUrl: 'templates/deliveryman/product/view_product_seguranca.html',
                controller: 'DeliverymanViewProductSegurancaCtrl'
            })
            .state('deliveryman.checkout_seguranca',{
                cache:false,
                url:'/checkout_seguranca/:id',
                templateUrl: 'templates/deliveryman/checkout/checkout_seguranca.html',
                controller: 'DeliverymanCheckoutSegurancaCtrl'
            })
            .state('deliveryman.checkout_item_detail_seguranca',{
                url:'/checkout/seguranca/detail/:index',
                templateUrl: 'templates/deliveryman/checkout/checkout_item_detail_seguranca.html',
                controller: 'DeliverymanCheckoutDetailSegurancaCtrl'
            })
            .state('deliveryman.summary',{
                cache: false,
                url:'/summary',
                templateUrl:'templates/deliveryman/summary.html',
                controller: 'DeliverymanSummaryCtrl'
            })
            .state('deliveryman.veiculo',{
                cache: false,
                url:'/veiculo',
                templateUrl:'templates/deliveryman/view_veiculo.html',
                controller: 'DeliverymanVeiculoCtrl'
            })
            .state('deliveryman.closeveiculo',{
                cache: false,
                url:'/veiculo_close',
                templateUrl:'templates/deliveryman/view_veiculo_close.html',
                controller: 'DeliverymanVeiculoCloseCtrl'
            })
            .state('deliveryman.signature',{
                cache: false,
                url:'/signature/:id/:index',
                templateUrl:'templates/deliveryman/signature.html',
                controller: 'DeliverymanSignatureCtrl'
            });


        $urlRouterProvider.otherwise("/Welcome");
        $provide.decorator('OAuthToken',['$localStorage','$delegate',function ($localStorage,$delegate) {
            Object.defineProperties($delegate,{
                setToken:{
                    value:function (data) {
                        return $localStorage.setObject('token',data);
                    },
                    enumarable:true,
                    configurable:true,
                    writable:true
                },
                getToken:{
                    value:function () {
                        return $localStorage.getObject('token');
                    },
                    enumarable:true,
                    configurable:true,
                    writable:true

                },
                removeToken:{
                    value:function () {
                        return $localStorage.setObject('token',null);
                    },
                    enumarable:true,
                    configurable:true,
                    writable:true
                }
            });
            return $delegate;
        }]);

        $provide.decorator('oauthInterceptor',['$delegate',function ($delegate) {
            delete $delegate['responseError'];
            return $delegate;
        }]);
    });

/*use Illuminate\Support\Collection;

...

 public function byLoan($id)
 {

 }*/