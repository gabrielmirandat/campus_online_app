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
          'data TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, link VARCHAR(300), link_video VARCHAR(300), link_imagem VARCHAR(300), link_audio VARCHAR(300), PRIMARY KEY(id))';
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
          let news1 = {titulo: 'Titulo da noticia de teste', 
                       resumo: 'Resumo da noticia de teste', 
                       texto: 'Texto da noticia de teste',
                       link: 'https://www.metropoles.com/colunas-blogs/grande-angular/salario-de-servidor-e-depositado-e-nao-aparece-na-conta-brb-explica',
                       link_video: 'https://www.youtube.com/embed/tgbNymZ7vqY',
                       link_imagem: 'https://i.imgur.com/TmtyMsp.jpg',
                       link_audio: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&amp;color=0066cc'};
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
