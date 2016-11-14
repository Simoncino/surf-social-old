var mysql      = require('mysql');

var LoginUtils = {
    login : function (request, reply) {
        /*console.log('LoginUtils.login : request', request);*/
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'ssurf',
		  password : 'ssurf',
		  database : 'social_surf',
		  /*socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'*/
		});
        connection.connect();
 		var users = null;
		connection.query('SELECT * from user', function(err, rows, fields) {
		  if (err) throw err;
		 users = rows;
		  /*console.log('The solution is: ', rows[0]);*/

		  console.log("users:::::::", users)

		  var result = {
	            "success": true, 
	            "message": "This is the result from server by axios call.", 
	            "random_number": Math.floor((Math.random() * 10) + 1),
	            "utente ce sente" : users
	        }
	        return reply(result);
		});
		connection.end();


        
    }
}

module.exports = LoginUtils;