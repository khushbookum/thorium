const express = require('express');
const router = express.Router();
// const controller = require('../controller/assinement.controller');
var play = [];
var nameArray =[];

router.post('/test-me', function (req, res) {
    play.push(req.body)   // insert data in play array
    res.send(play)   //send response to client side 
    
});
router.post('/test-me2', function (req, res) {
    if(nameArray.includes(req.body.name)){
        return res.send('name Already exit')
    }
    
    nameArray.push(req.body.name);

    
    play.push(req.body)   // insert data in play array

    res.send(play)   //send response to client side 
    
});
// router.get('/test-me2',controller.create()); 
    



module.exports = router;