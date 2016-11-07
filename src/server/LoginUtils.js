var LoginUtils = {
    login : function (request, reply) {
        console.log('LoginUtils.login : request', request);
        var result = {
            "success": true, 
            "message": "This is the result from server by axios call.", 
            "random_number": Math.floor((Math.random() * 10) + 1)
        }
        return reply(result);
    }
}

module.exports = LoginUtils;