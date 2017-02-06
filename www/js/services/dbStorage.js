var db = null;
var sqlite = angular.module('sqlite', ['ionic', 'ngCordova']);

sqlite.run(function($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function() {
        db = $cordovaSQLite.openDB("leiviton.db");
        $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS dados_orders (id integer primary key,user_id integer,status integer,service text,defect text,number_os_sise text,priority integer,name text,phone1 text,phone2 text,type text,address text,address_number text,district text,city text,state text,plano text,id_plano text)");
    });
});


