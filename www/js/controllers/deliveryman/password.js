angular.module('starter.controllers')
    .controller('PasswordCtrl',[
        '$scope','$state','$ionicLoading','UserData','OAuthToken','$cart','$localStorage','User',
        function ($scope, $state,$ionicLoading,UserData,OAuthToken,$cart,$localStorage,User) {
                $scope.usuario = $localStorage.getObject('user');
                $scope.login = $localStorage.getObject('login');

            $scope.user = {
                new_password:''
            };

            $scope.Salvar = function () {
                User.updatePassword({new_senha:$scope.user.new_password})
                    .then(function (data) {
                        $scope.login.password = $scope.user.new_password;
                        $localStorage.setObject('login',$scope.login);
                        UserData.login($scope.login);
                });
            }
    }]);