var express = require('express');
var routerRiego = express.Router();
var pool = require('../../mysql');
var bodyparser = require('body-parser');

routerRiego.use(bodyparser.json());
routerRiego.use(bodyparser.urlencoded({extended: true}));


routerRiego.post('/', function(req, res) {
    pool.query(`INSERT INTO Log_Riegos(apertura, fecha, electrovalvulaId) VALUES ('${req.body.apertura}','${req.body.fecha}','${req.body.electrovalvulaId}')`, function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


routerRiego.get('/:id', function(req, res) {
    pool.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId=? ORDER BY fecha DESC',[req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerRiego.get('/:id/all', function(req, res) {
    pool.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId=?',[req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerRiego;