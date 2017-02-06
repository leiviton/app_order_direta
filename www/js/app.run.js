angular.module('starter.run').run(['$state','PermissionStore','RoleStore','OAuth','UserData',
    '$rootScope','authService','$cart','OAuthToken','$ionicHistory','ionicToast','httpBuffer',
    function ($state,PermissionStore,RoleStore,OAuth,UserData,$rootScope,authService,$cart,
              OAuthToken,$ionicHistory,ionicToast,httpBuffer){
        PermissionStore.definePermission('user-permission',function () {
           return OAuth.isAuthenticated();
        });

        PermissionStore.definePermission('client-permission',function () {
            var user = UserData.get();
            if(user == null || !user.hasOwnProperty('role')){
                return false;
            }
            return user.role == 'client';
        });
        RoleStore.defineRole('client-role',['user-permission','client-permission']);

        PermissionStore.definePermission('deliveryman-permission',function () {
            var user = UserData.get();
            if(user == null || !user.hasOwnProperty('role')){
                return false;
            }
            return user.role == 'deliveryman';
        });
        RoleStore.defineRole('deliveryman-role',['deliveryman-permission']);

        PermissionStore.definePermission('adm-permission',function () {
            var user = UserData.get();
            if(user == null || !user.hasOwnProperty('role')){
                return false;
            }
            return user.role == 'adm';
        });
        RoleStore.defineRole('adm-role',['user-permission','adm-permission']);

        $rootScope.$on('event:auth-loginRequired',function (event,data) {

            switch (data.data.error){
                case 'access_denied':
                    if(!$rootScope.refreshingToken){
                        $rootScope.refreshingToken = OAuth.getRefreshToken();
                    }
                    $rootScope.refreshingToken.then(function (data) {
                        authService.loginConfirmed();
                        $rootScope.refreshingToken = null;
                    },function (responseError) {
                        ionicToast.show('Não foi possivel conectar ao servidor, tente novamente', 'top', false, 3500);
                        $state.go('deliveryman.home');
                    });
                    break;
                case 'invalid_credentials':
                    httpBuffer.rejectAll(data);
                    ionicToast.show('Não foi possivel conectar ao servidor, tente novamente', 'top', false, 3500);
                    break;
                default:
                    ionicToast.show('Não foi possivel conectar ao servidor, tente novamente', 'top', false, 3500);
                    $state.go('deliveryman.home');
                    break;
            }


        });
}]);