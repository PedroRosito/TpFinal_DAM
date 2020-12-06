var express = require('express');
var routerMedicion = express.Router();
var pool = require('../../mysql');

routerMedicion.get('/:id/all', function(req, res) {
    pool.query('SELECT * FROM Mediciones WHERE dispositivoId=?',[req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

routerMedicion.get('/:id', function(req, res) {
    pool.query('SELECT * FROM Mediciones WHERE dispositivoId=? ORDER BY fecha DESC',[req.params.id], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});


routerMedicion.post('/', function(req, res) {
    pool.query('Insert into Mediciones (fecha,valor,dispositivoId) values (?,?,?)', [req.body.fecha, req.body.valor, req.body.dispositivoId], function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
});

module.exports = routerMedicion;