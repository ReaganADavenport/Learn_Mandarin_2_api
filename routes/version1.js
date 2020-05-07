const express = require('express'),
    router = express.Router();

const CardModel = require('../models/card');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.send("Welcome to my API").status(200);
});

router.get('/radicals/list', async (req,res,next)=>{
    const AllRadicals = await CardModel.getAllRadicals();
    res.json(AllRadicals).status(200);
});

router.get('/radicals/char_eng/1', async (req,res,next)=>{
    const FiveRadicals = await CardModel.getFiveRadicals();
    res.json(FiveRadicals).status(200);
});

router.get('/radicals/char_eng/2', async (req,res,next)=>{
    const TenRadicals = await CardModel.getTenRadicals();
    res.json(TenRadicals).status(200);
});

router.get('/radicals/char_eng/3', async (req,res,next)=>{
    const FifteenRadicals = await CardModel.getFifteenRadicals();
    res.json(FifteenRadicals).status(200);
});

module.exports = router;