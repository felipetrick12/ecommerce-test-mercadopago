const express = require('express');
const cors = require('cors');
require('dotenv').config();

var app = express();
 
//habilitar cors
app.use(cors());

app.get('/',(req, res) => {
    res.send('Hola Mundo')
})

app.use( express.json() ); 

app.use( '/api/products',require('./routes/products')); 

app.listen(process.env.PORT,()=>{
    console.log(`servidor corriendo en puerto ${process.env.PORT}`);
})  