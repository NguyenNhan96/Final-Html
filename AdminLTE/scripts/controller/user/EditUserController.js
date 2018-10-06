// JavaScript source code
routerApp.controller('EditProductController', function ($scope, $uibModalInstance, $http, item) {

    $scope.model = item;

    $scope.ok = function () {

        //console.log('new selection', $scope.selected);
        //var data = $.param({
        //    json: JSON.stringify({
        //        user: user.name,
        //        products: $scope.selected
        //    })
        //});

        //$http.post('/echo/json/', data)
        //    .success(function (data, status) {
        //        console.log('posted the following data:', data);
        //    });

        $uibModalInstance.close(); //); $scope.selected.item);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});

