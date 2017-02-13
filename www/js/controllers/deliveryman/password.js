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
              var promise =  User.updatePassword({new_password:$scope.user.new_password}).$promise;
                  promise.then(function (data) {
                        $scope.login.password = $scope.user.new_password;
                        $localStorage.setObject('login',$scope.login);
                        UserData.login($scope.login);
                },function (error) {
                      console.log(error);
                  });
            }
    }]);