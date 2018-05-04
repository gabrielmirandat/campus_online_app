module.exports = (app) => {
  const pool = require('../libs/db_conn.js');
  const async = require('async');

  const migrationController = {
   
    run(req, res) {
      async.waterfall([
        function(callback) {
          var sql = "CREATE DATABASE IF NOT EXISTS campus_online_local";
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
              callback(null, 'Created database campus_online_local with success! ');
            });
          });
        },
        function(arg, callback) {
          let sql = 'CREATE TABLE IF NOT EXISTS noticia(id INT AUTO_INCREMENT, titulo VARCHAR(60) NOT NULL, resumo VARCHAR(300) NOT NULL, texto VARCHAR(600) NOT NULL, '+ 
          'data TIMESTAMP NOT NULL DEFAULT "0000-00-00 00:00:00" ON UPDATE CURRENT_TIMESTAMP, link VARCHAR(300), link_video VARCHAR(300), link_foto VARCHAR(300), link_audio VARCHAR(300), PRIMARY KEY(id))';
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
              callback(null, arg + 'Created table noticia with success! ');
            });
          });
        },
        function(arg, callback) {
          let news1 = {titulo: 'Uiaasi', 
                       resumo: 'Resumo asd', 
                       texto: 'Texto asd',
                       link: 'http://www.google.com',
                       link_video: 'http://video',
                       link_foto: 'http://foto',
                       link_audio: 'http://audio'};
          let sql = 'INSERT INTO noticia SET ?';
          // get a connection from the pool
          pool.getConnection(function(err, connection) {
            if(err) {
              console.log(err);
              callback(err);
              return;
            }
            connection.query(sql, news1, function(err, res) {
              connection.release();
              if(err) {
                console.log(err);
                callback(err);
                return;
              }
              callback(null, arg + 'Added first row to noticia with success!');
            });
          });
        },
        function(arg, callback) {
          let sql = 'CREATE TABLE IF NOT EXISTS acesso(chave VARCHAR(6), PRIMARY KEY(chave))';
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
              callback(null, arg + 'Created table acesso with success! ');
            });
          });
        },
        function(arg, callback) {
          let key = {chave: '123456'};
          let sql = 'INSERT INTO acesso SET ?';
          // get a connection from the pool
          pool.getConnection(function(err, connection) {
            if(err) {
              console.log(err);
              callback(err);
              return;
            }
            connection.query(sql, key, function(err, res) {
              connection.release();
              if(err) {
                console.log(err);
                callback(err);
                return;
              }
              callback(null, arg + 'Added first row to acesso with success!');
            });
          });
        }
      ],
      function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    }  
  }
  return migrationController;
};