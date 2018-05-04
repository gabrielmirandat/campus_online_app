module.exports = (app) => {
    const pool = require('../libs/db_conn');
    const {getValue} = require('../libs/db_dml');
  
    const newsController = {
      getAll(req, res) {
        var sql = "SELECT * FROM noticia ORDER BY data";
        // get a connection from the pool
        pool.getConnection(function(err, connection) {
          if(err) {
              res.send(JSON.stringify({"error": err, "response": null}));
          }
          connection.query(sql, function(err, results) {
            connection.release();
            if(err) {
              res.send(JSON.stringify({"error": err, "response": null}));
            }
            res.send(JSON.stringify({"error": null, "response": results}));
          });
        });
      },

      getByDate(req, res) {
        var sql = `SELECT * FROM noticia WHERE data = "${req.params.date}" ORDER BY data`;
        console.log(sql)
        // get a connection from the pool
        pool.getConnection(function(err, connection) {
          if(err) {
              res.send(JSON.stringify({"error": err, "response": null}));
          }
          connection.query(sql, function(err, results) {
            connection.release();
            if(err) {
              res.send(JSON.stringify({"error": err, "response": null}));
            }
            res.send(JSON.stringify({"error": null, "response": results}));
          });
        });
      },

      addNews(req, res) {
        let data = req.body;
        console.log(data)
        var sql = 'INSERT INTO noticia SET ?';
        console.log(sql)
        // get a connection from the pool
        pool.getConnection(function(err, connection) {
          if(err) {
              res.send(JSON.stringify({"error": err, "response": null}));
          }
          connection.query(sql, data, function(err, results) {
            connection.release();
            if(err) {
              res.send(JSON.stringify({"error": err, "response": null}));
            }
            res.send(JSON.stringify({"error": null, "response": results}));
          });
        });
      }


    };
    return newsController;
}