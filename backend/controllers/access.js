module.exports = (app) => {
    const pool = require('../libs/db_conn');
    const {getValue} = require('../libs/db_dml');
  
    const accessController = {
      checkKey(req, res) {
        console.log(req.body);
        let key = req.body.chave;
        var sql = `SELECT 1 FROM acesso WHERE chave = "${key}"`;
        console.log(sql);
        // get a connection from the pool
        pool.getConnection(function(err, connection) {
          if(err) {
              res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
          }
          connection.query(sql, function(err, results) {
            connection.release();
            if(err) {
              res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
            }
            res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
          });
        });
      }
    }
    return accessController;
}