const {Router} = require('express');
const router = Router();
const {check } = require('express-validator');
const { customValidator } = require('../middleware/customValidator');
const mercadoPago = require ('mercadopago');

mercadoPago.configure({
    access_token: 'TEST-6882358241142713-042615-f6bad4b3d85ef51203a0d22173bbc096-475973489'
});

router.post( '/', [
    check('id','ID producto obligatorio').isNumeric().withMessage("ingresar numero").not().isEmpty(),
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
                           title: req.body.name_product,
                           description: req.body.description,
                           picture_url : req.body.url,
                           category_id : req.body.id,
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
                        excluded_payment_methods: [
                          {}
                        ],
                        excluded_payment_types: [
                          {}
                        ]
                      },
                      shipments: {
                        free_methods: [
                          {}
                        ],
                        receiver_address: {}
                      },
                      auto_return : "approved",
                      back_urls: {
                        "failure": "http://localhost:4000/",
                        "pending": "http://localhost:4000/api/products",
                        "success": "http://localhost:4000/api/products"
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