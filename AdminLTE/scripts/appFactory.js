routerApp.factory('appFactory', function ($http) {
    return {
        setString: function (input) {
            return $http.get("http://localhost:9000/uaa/api/users/admin");
        }
    }
});