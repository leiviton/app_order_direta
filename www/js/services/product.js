angular.module('starter.services')
    .factory('Product',['$resource','appConfig',function ($resource,appConfig) {
        var url = appConfig.baseUrl + '/api/deliveryman/';
        return $resource(url,{},{
            query:{
                isArray: false
            },
            fibra:{
                method:'GET',
                url: url + 'fibra'
            },
            radio:{
                method:'GET',
                url: url + 'radio'
            },
            seguranca:{
                method:'GET',
                url: url + 'seguranca'
            }
        });
    }])

    .factory('Auxiliary',['$resource','appConfig',function ($resource,appConfig) {

        return $resource(appConfig.baseUrl + '/api/deliveryman/auxiliary',{},{
            query:{
                isArray: false
            }
        });

    }])

    .factory('Veiculo',['$resource','appConfig',function ($resource,appConfig) {

        return $resource(appConfig.baseUrl + '/api/deliveryman/veiculos',{},{
            query:{
                isArray: false
            }
        });

    }]);