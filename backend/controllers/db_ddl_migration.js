const async = require('async')
      , pool = require('../libs/db_conn')

  var dbMigration = {
    controller: function(type) {  
      return function(req, res) {
        async.waterfall([
          function(callback) {
            var sql = "CREATE DATABASE campus_online";
            // get a connection from the pool
            pool.getConnection(function(err, connection) {
              if(err) {
                console.log(err);
                callback(err);
                return;
              }
              connection.query(sql, function(err, res) {
                connection.release();
                if(err) {
                  console.log(err);
                  callback(err);
                  return;
                }
                callback(null, 'Created database with success!');
              });
            });
          },
          function(callback) {
            let sql = 'CREATE TABLE noticia(id INT AUTO_INCREMENT, titulo VARCHAR(55) NOT NULL, resumo VARCHAR(255) NOT NULL, texto VARCHAR(555) NOT NULL, '+ 
            'data VARCHAR(8) NOT NULL, PRIMARY KEY(id))';
            // get a connection from the pool
            pool.getConnection(function(err, connection) {
              if(err) {
                console.log(err);
                callback(err);
                return;
              }
              connection.query(sql, function(err, res) {
                connection.release();
                if(err) {
                  console.log(err);
                  callback(err);
                  return;
                }
                callback(null, 'Created table with success!');
              });
            });
          },
          function(callback) {
            let news1 = {titulo: 'Primeira noticia', resumo: 'Resumo da primeira noticia', texto: 'Corpo da primeira notícia', data: '16/04/18'};
            let sql = 'INSERT INTO noticia SET ?';
            // get a connection from the pool
            pool.getConnection(function(err, connection) {
              if(err) {
                console.log(err);
                callback(err);
                return;
              }
              connection.query(sql, function(err, res) {
                connection.release();
                if(err) {
                  console.log(err);
                  callback(err);
                  return;
                }
                callback(null, 'Added first row with success!');
              });
            });
          }
        ],
        function (err, result) {
          if (err) {
            console.log(err);
          } else {
            res.send(asyncF.responseVector);
          }
        });
      }
    }
  }

  module.exports = dbMigration;