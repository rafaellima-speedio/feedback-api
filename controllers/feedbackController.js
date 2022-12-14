const express = require('express');
const router = express.Router();

const feedback = require('../models/feedback')


router.get('/', async (req, res) => {
    return res.status(200).json({message: 'Success.'});
})


router.post('/', async (req, res) => {
    try{
        await feedback.insertOne(
            req.body.cnpj, 
            req.body.client_id, 
            req.body.errors,
            req.body.message, 
            req.body.nps,
            req.body.origin
        );
        return res.status(200).json({message: 'Success.'});
    }
    catch(err){
        return res.status(500).json({message: `${err}`});
    }
})


module.exports = router;