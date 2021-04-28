const {Router} = require('express');
const router = Router();
const {check } = require('express-validator');
const { customValidator } = require('../middleware/customValidator');
const mercadoPago = require ('mercadopago');
const postHttp = require('../controllers/postHttp');

mercadoPago.configure({
    access_token: 'APP_USR-2572771298846850-120119-a50dbddca35ac9b7e15118d47b111b5a-681067803'
});

router.post( '/', [
    check('name_product','Nombre producto obligatorio').not().isEmpty(),
    check('description','Descripcion de producto obligatorio').not().isEmpty(),
    check('url','Imagen obligatoria').not().isEmpty(),
    check('cantidad','Cantidad de producto obligatoria').isNumeric().withMessage("ingresar numero").not().isEmpty(),
    check('precio','Precio Obligatorio').isNumeric().withMessage("ingresar numero").not().isEmpty(),
    customValidator 
    ],
    postHttp
    );


module.exports= router;