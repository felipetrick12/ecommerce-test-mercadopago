const {Router} = require('express');
const router = Router();
const {check } = require('express-validator');
const { customValidator } = require('../middleware/customValidator');
const mercadoPago = require ('mercadopago');

mercadoPago.configure({
    access_token: 'APP_USR-2572771298846850-120119-a50dbddca35ac9b7e15118d47b111b5a-681067803'
});

router.post( '/', [
    check('id','ID producto obligatorio').not().isEmpty(),
    check('name_product','Nombre producto obligatorio').not().isEmpty(),
    check('description','Descripcion de producto obligatorio').not().isEmpty(),
    check('url','Imagen obligatoria').not().isEmpty(),
    check('cantidad','Cantidad de producto obligatoria').isNumeric().withMessage("ingresar numero").not().isEmpty(),
    check('precio','Precio Obligatorio').isNumeric().withMessage("ingresar numero").not().isEmpty(),
    customValidator 
    ],
    async function (req ,res) { 
        try {
          
                var preference = {
                       items: [
                         {
                           id : req.body.id,
                           title: req.body.name_product,
                           description: req.body.description,
                           picture_url : req.body.url,
                           quantity: req.body.cantidad,
                           unit_price: req.body.precio
                         }
                       ], payer: {
                        phone: {},
                        identification: {},
                        address: {}
                      },
                      external_reference : "duvanli@hotmail.es",
                      payment_methods: {
                        "excluded_payment_methods": [
                          {
                            "id": "amex"
                          }
                        ],
                        "excluded_payment_types": [
                          {
                            "id": "atm"
                          }
                        ],
                        "installments": 6
                      },
                      shipments: {
                        free_methods: [
                          {}
                        ],
                        receiver_address: {}
                      },
                      auto_return : "approved", 
                      back_urls: {
                        "failure": "https://felipetrick12-ecommerce-mp.herokuapp.com",
                        "pending": `https://felipetrick12-ecommerce-mp.herokuapp.com/detail/${req.body.id}`,
                        "success": "https://felipetrick12-ecommerce-mp.herokuapp.com"
                      },
                      differential_pricing: {},
                     
                      
                     };
       
              const succes = await  mercadoPago.preferences.create(preference)
                     
               res.status(201).json({
                   ok:true,
                   producto: succes
               })

        } catch (error) {
            console.log(error)
             return res.status(500).json({
             ok:true,
             msg: 'hable con el administrador'
         })
        }
    } );


module.exports= router;