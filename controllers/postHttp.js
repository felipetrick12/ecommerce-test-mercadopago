
const postHttp = async (req ,res) => {
        try {
          
                var preference = {
                       items: [
                         {
                           id : '1234',
                           title: req.body.name_product,
                           description: req.body.description,
                           picture_url : req.body.url,
                           quantity: req.body.cantidad,
                           unit_price: req.body.precio
                         }
                       ], payer: {
                         name:'Lalo Landa',
                         email: 'test_user_83958037@testuser.com',
                        phone: {
                          number:5549737300,
                          area_code : '52'
                        },
                        identification: {},
                        address: {
                          street_name : 'Insurgentes Sur',
                          street_number : 1602,
                          zip_code : '03940'  
                        }
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
                        "failure": `https://felipetrick12-ecommerce-mp.herokuapp.com/detail/${req.body.id}`,
                        "pending": `https://felipetrick12-ecommerce-mp.herokuapp.com/detail/${req.body.id}`,
                        "success": `https://felipetrick12-ecommerce-mp.herokuapp.com/detail/${req.body.id}`
                      },
                      differential_pricing: {},
                      notification_url: `https://felipetrick12-ecommerce-mp.herokuapp.com/api/web`
                      
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
    
}

module.exports = postHttp;