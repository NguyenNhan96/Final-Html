'use strict';

var Constants = (function () {
    // local
    var rootApiUrl = '/api';
    var authenticationService = '/oauth/';
    var WebApi = {
        User: {
            GetUser: 'http://localhost:9000/uaa/api/users/admin'
        }
    }

    return {
        WebApi: WebApi,
    };
})();