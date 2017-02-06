angular.module('starter.services')
    .factory('Notification',['$resource','appConfig',function ($resource,appConfig) {

        return $resource(appConfig.baseUrl + '/api/notification',{id:'@id'},{
            query:{
                isArray: false
            },
            notification:{
                method:'GET',
                url: appConfig.baseUrl + '/api/notification'
            }
        });


}]);