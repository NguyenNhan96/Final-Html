// JavaScript source code
routerApp.controller('UserController', function ($scope, $uibModal, $http, appFactory) {

    var getUser = function () {
        $http.get('http://localhost:8080/uaa/api/users').then(function (response) {
            $scope.model = response.data;
        }, function (response) {

        });
        //appFactory.get().then(function (response) {

        //}, function (response) {

        //});
    }

    getUser();
    //$scope.add = function (model) {
    //    var uibModalInstance = $uibModal.open({
    //        templateUrl: '../views/product/edit.view.html',
    //        controller: 'EditProductController',
    //        resolve: {
    //            item: function () {
    //                return model;
    //            }
    //        }
    //    });
    //    uibModalInstance.result.then(function (response) {
    //        //products = selectedItems;
    //    }, function () {
    //        //$log.info('Modal dismissed at: ' + new Date());
    //    });
    //}
});
