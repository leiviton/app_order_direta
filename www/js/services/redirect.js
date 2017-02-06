angular.module('starter.services')
    .service('$redirect',['$state','$localStorage','appConfig', function($state,$localStorage,appConfig) {

        this.redirectAfterLogin = function () {
            var user = $localStorage.getObject('user');
            $state.go(appConfig.redirectAfterLogin[user.role]);
        };

        this.redirectSincronizar = function () {
            $state.go('deliveryman.sincronizar');
        }
    }]);
