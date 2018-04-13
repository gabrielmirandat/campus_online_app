var mysql = require('mysql')
  , pool = require('./db_conn');

exports.insertValue = (data, callback, successCallback) => {
  var sql = "INSERT INTO " + pool.escapeId(data.db) + " SET ?";
  
  // get a connection from the pool
  pool.getConnection(function(err, connection) {
    if(err) {
      console.log(err);
      callback(true, null, successCallback);
      return;
    }
    
    connection.query(sql, data.json, function(err, res) {
      connection.release();
      if(err) {
        console.log(err);
        callback(true, null, successCallback);
        return;
      }
      callback(false, res, successCallback);
    });
  });
};

exports.getValue = function(data, callback, successCallback) {
	var sql = "SELECT ?? FROM " + pool.escapeId(data.db) + " WHERE ";

	var start = new Date().getTime();
  var end;
  
	pool.getConnection(function(err, connection) {
		if(err) {
			console.log(err);
			callback(true, null, successCallback);
			return;
		}
		// make the query
		var keys = Object.keys(data.json);
    var length = keys.length;
    
    sql = sql + pool.escapeId(keys[0]) + " = " + pool.escape((data.json)[keys[0]]);
    
		if(length > 1) {
			for(var i = 1; i < length; i++) {
				sql = sql + ' and ' + pool.escapeId(keys[i]) + " = " + pool.escape((data.json)[keys[i]]);
			}
    }
    
		if(data.extra_sql) {
			sql = sql + data.extra_sql;
		}
		
		connection.query(sql, [data.returnColumns], function(err, res) {
			connection.release();
			if(err) {
				console.log(err);
				callback(true, null, successCallback);
				return;
			}
			callback(false, res, successCallback);
		});
	});
};





