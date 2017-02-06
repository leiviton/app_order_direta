angular.module('starter.controllers')
    .controller('DeliverymanSummaryCtrl',[
        '$scope','DeliverymanOrder','ionicToast','$localStorage',
        function ($scope,DeliverymanOrder,ionicToast,$localStorage) {
            $scope.data = [];
            $scope.data1 = [];
            $scope.labels = [];
            $scope.label = [];
            $scope.colors = [];
            $scope.color = [];
            $scope.serie = [];
            $scope.series = [];


                $scope.mes = $localStorage.get('orders_pendentes_criticas');
                $scope.data1.push($scope.mes);
                $scope.label.push('Prioridade Crítica');
                $scope.color.push('#EF473A');
                $scope.serie.push($scope.mes);

                $scope.dia = $localStorage.get('orders_pendentes_alta');
                $scope.data1.push($scope.dia);
                $scope.label.push('Prioridade Média');
                $scope.color.push('#FFC900');
                $scope.serie.push($scope.dia);


                $scope.mesI = $localStorage.get('orders_fechadas_mes');
                $scope.data.push($scope.mesI);
                $scope.labels.push('Fechadas no mês');
                $scope.colors.push('#33CD5F');
                $scope.series.push($scope.mesI);


                $scope.diaI = $localStorage.get('orders_fechadas_dia');
                if ($scope.mesI > $scope.diaI) {
                    $scope.menorP = true;
                } else {
                    $scope.menorP = false;
                }
                $scope.data.push($scope.diaI);
                $scope.labels.push('Fechadas no dia');
                $scope.colors.push('#11C1F3');
                $scope.series.push($scope.diaI);



            $scope.options = {
                tooltips: {
                    enabled: true
                },
                hover: {
                    animationDuration: 0
                },
                legend: {
                    display: true,
                    labels: {
                        fontColor: '#000',
                        fontSize: 12
                    }
                }
            };

            ionicToast.show('Seus indicadores estão atualizados', 'bottom', false, 3500);
    }]);