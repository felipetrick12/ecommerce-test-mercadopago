const express = require('express');
const cors = require('cors');
const path= require('path');
require('dotenv').config();

var app = express();
 
//habilitar cors
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res) => {
    res.send(publicPath)
})

app.use( express.json() ); 

app.use( '/api/products',require('./routes/products')); 

app.listen(process.env.PORT,()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
})  