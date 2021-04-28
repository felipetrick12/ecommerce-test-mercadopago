const { Router } = require('express');
const router = Router();
const fs = require('fs');
const path= require('path');



router.post('/', async function (req ,res) {
    fs.writeFileSync(path.join(__dirname +'../public/reshook.json'),JSON.stringify(req.body))
    console.log(req.body)
    return res.status(200);
 })

router.get('/download', function(req, res){
    res.download(path.join(__dirname +'../public/reshook.json'));
});

module.exports = router;