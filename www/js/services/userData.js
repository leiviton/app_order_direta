angular.module('starter.services')
    .factory('UserData',['$localStorage','User','OAuth','OAuthToken','$state','$ionicLoading','$ionicPopup','DeliverymanOrder',
        '$redirect','Sincronizar','$timeout','$cordovaToast','$cart','$ionicHistory',
        function ($localStorage,User,OAuth,OAuthToken,$state,$ionicLoading,$ionicPopup,DeliverymanOrder,
                  $redirect,Sincronizar,$timeout,$cordovaToast,$cart,$ionicHistory) {
        var key = 'user';

        return {
            set: function (value) {
                return $localStorage.setObject(key,value);
            },
            get: function () {
                return $localStorage.getObject(key);
            },
            login: function (o) {

                console.log('chegou no userdate')

                var message = 'Sincronizando ';
                $ionicLoading.show({
                    template: ' <ion-spinner></ion-spinner> <br> ' + message
                });

                if (window.Connection) {
                    if (navigator.connection.type == Connection.NONE) {
                        if ($localStorage.getObject('login') != null) {
                            var user = $localStorage.getObject('login').username;
                            var senha = $localStorage.getObject('login').password;

                            if (o.username == user && o.password == senha) {
                                console.log('offline');
                                $cordovaToast.show('Login efetuado com smartphone offline', 'long', 'top');
                                $ionicLoading.hide();
                                $state.go('deliveryman.home');
                            } else {
                                $cordovaToast.show('Conecte á internet para continuar', 'long', 'top');
                                $ionicLoading.hide();
                                $state.go('login');
                            }
                        }else {
                            if ($localStorage.getObject('ultimo_login') != null) {
                                var user = $localStorage.getObject('ultimo_login').username;
                                var senha = $localStorage.getObject('ultimo_login').password;

                                if (o.username == user && o.password == senha) {
                                    $localStorage.setObject('login', o);
                                    console.log('offline');
                                    $cordovaToast.show('Não foi possivel conectar, smartphone offline', 'long', 'top');
                                    $ionicLoading.hide();
                                    $state.go('deliveryman.home');
                                } else {
                                    $cordovaToast.show('Conecte a internet para continuar', 'long', 'top');
                                    $localStorage.setObject('ultimo_login',null);
                                    $ionicLoading.hide();
                                    $state.go('login');
                                }

                            }
                        }
                    }else{
                        console.log('online');
                        var promise = OAuth.getAccessToken(o);
                        promise
                            .then(function (data) {
                                $localStorage.setObject('login', o);
                                $localStorage.setObject('ultimo_login', o);
                                return User.authenticated({include: 'client'}).$promise;
                            })
                            .then(function (data) {
                                $localStorage.setObject(key, data.data);
                                Sincronizar.sincronizar();

                                    if (data.data.funciona.data.ATIVO == 'Sim') {
                                        if(data.data.primeiro_acesso==1) {
                                            $ionicLoading.hide();
                                            $timeout(function () {
                                                    $redirect.redirectSincronizar();
                                                },
                                                3000);

                                            $cordovaToast.show('Aplicativo atualizado', 'long', 'top');
                                        }else {
                                            $ionicLoading.hide();
                                            $state.go('password');
                                            $cordovaToast.show('Seu primeiro acesso, favor trocar a senha', 'long', 'top');
                                        }
                                    }else {
                                        $cart.clearLogin();
                                        $ionicHistory.clearCache();
                                        $ionicHistory.clearHistory();
                                        $ionicHistory.nextViewOptions({
                                            disableBack: true,
                                            historyRoot: true
                                        });
                                        $ionicLoading.hide();
                                        $state.go('login');
                                        $cordovaToast.show('Usuário sem permissão', 'long', 'top');
                                    }
                                

                            }, function (responseError) {
                                    console.debug(responseError);
                                    $ionicLoading.hide();
                                    $localStorage.setObject('login', null);
                                    OAuthToken.removeToken();
                                    $cordovaToast.show('Algo deu errado', 'long', 'center');
                                    $state.go('login');
                            });
                    }
                }
            },
            sync: function (o) {
                console.log('executou');
                if(window.Connection) {
                    if (navigator.connection.type != Connection.NONE) {
                        var promise = OAuth.getAccessToken(o);
                        promise
                            .then(function (data) {
                                $localStorage.setObject('login', o);
                                $localStorage.setObject('ultimo_login', o);
                                return User.authenticated({include: 'client'}).$promise;
                            })
                            .then(function (data) {
                                Sincronizar.sincronizar();
                                $localStorage.setObject(key, data.data);
                            }, function (responseError) {
                                console.debug(responseError);
                            });
                    }else{
                        console.log('sem internet');
                    }
                }
            }

        }
    }]);