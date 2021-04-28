const { Router } = require('express');
const router = Router();
const fs = require('fs');


router.post('/', async function (req ,res) {
    fs.writeFileSync('../json/reshook.json',JSON.stringify(req.body))
    console.log(req.body)
    return res.status(200);
 })

router.get('/download', function(req, res){
    res.download('ruta del archivo y nombre');
});

module.exports = router;