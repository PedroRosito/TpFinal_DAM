var cors = require('cors');
var express =require('express');
var app = express();
var puerto = 3000;
var routerDispositivo = require('./routes/dispositivos');
var routerMedicion = require('./routes/mediciones');
var routerRiego = require('./routes/riegos');

app.use(cors());
app.use('/dispositivos',routerDispositivo);
app.use('/medicion', routerMedicion);
app.use('/logriego', routerRiego)

app.use(express.json());

app.listen(puerto, function(req,res){
    console.log("API funcionando");
})