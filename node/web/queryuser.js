var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mojie'
});
 

function queryUser(userId){
	quserdata="";
	var userquery =connection.query('SELECT * FROM users WHERE phone = ?', [userId], function(err, results) {
    //return results;
    //console.log(results[0]);
    quserdata=results[0];
    
	})
	console.log(quserdata);
	return quserdata;
}
//var userId = 18017057704;
exports.qUser=queryUser;
//console.log(userquery);
// SELECT * FROM users WHERE id = 1, name = 'test'
//connection.end();