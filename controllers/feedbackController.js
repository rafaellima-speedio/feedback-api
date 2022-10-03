const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    return res.status(200).json({message: 'ok'});
})


router.post('/', async (req, res) => {
    return res.status(200).json({message: 'ok'});
})


module.exports = router;