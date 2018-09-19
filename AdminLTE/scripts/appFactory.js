routerApp.factory('appFactory', function () {
    return {
        setString: function (input) {
            return "Hello " + input;
        }
    }
});