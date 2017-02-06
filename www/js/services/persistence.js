angular.module('starter.services', [])

    .factory('Persistence', function() {
        persistence.store.cordovasql.config(persistence, 'direta_os', '0.0.1', 'Base de dados aplicativo', 10 * 1024 * 1024, 0);
        var entities = {};
        entities.Order = persistence.define('Order', {
            id: 'INTEGER',
            user_id: 'INTEGER',
            status: 'INTEGER',
            service: 'TEXT',
            defect: 'TEXT',
            number_os_sise: 'TEXT',
            priority: 'TEXT',
            name: 'TEXT',
            phone1: 'TEXT',
            phone2: 'TEXT',
            type: 'TEXT',
            address: 'TEXT',
            address_number: 'TEXT',
            district: 'TEXT',
            city: 'TEXT',
            state: 'TEXT',
            plano: 'TEXT',
            id_plano: 'TEXT'
        });

        persistence.debug = true;
        persistence.schemaSync();

        return {
            Entities: entities,
            add: function (order) {
                persistence.add(order);
                persistence.flush();
            },
            delete: function (id) {
                persistence.remove(id);
                persistence.flush();
            }
        }
    });
