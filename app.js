const express = require('express');
const cors = require('cors');
const path= require('path');
require('dotenv').config();

var app = express();
 
//habilitar cors
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use( express.json() );
 
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


app.use( '/api/products',require('./routes/products')); 
app.use( '/api/web',require('./routes/webhook')); 


app.listen(process.env.PORT,()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
})  