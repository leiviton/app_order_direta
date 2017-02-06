$ionicPopup.confirm({
    title: 'Atenção',
    template: 'Deseja fechar esta Ordem?'
}).then(function(res) {
    if(res) {
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                DeliverymanOrder.updateStatus({id: $stateParams.id}, {
                    status: 2,
                    lat: lat,
                    long: long,
                    service: o.service,
                    time: o.time
                },function (data) {
                    $scope.order = data;
                    console.log(data);
                    $state.go('deliveryman.order');
                });
            }, function(err) {
                // error
            });
    } else {

    }
});