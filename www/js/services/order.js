angular.module('starter.services')
    .service('$order',['$localStorage',function ($localStorage) {
        var key = 'orders';
        var key1 = 'orders_update', aux = $localStorage.getObject(key1);

        if(aux==null){
            $localStorage.setObject(key1,{
                items:[]
            });
        }


        this.get = function () {
            return $localStorage.getObject(key);
        };

        this.getO = function () {
            return $localStorage.getObject(key1);
        };
        this.getItem = function (i) {
            return this.get().items[i];
        };

        this.addItem = function (item) {
            var cart2 = this.getO();
            cart2.items.push(item);
            $localStorage.setObject(key1,cart2);
        };

        this.removeItem = function (i) {
            var cart = this.get();
            cart.items.splice(i,1);
            $localStorage.setObject(key,cart);
        };

        function initCart() {

        }
    }]);