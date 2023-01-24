const express = require('express');
const router = express.Router();

const { MangaModel } = require('../Models/mangaModel');

router.get('/', (req, res) => {
    MangaModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

router.post('/', (req, res) => {
    const newManga = new MangaModel({
        title: req.body.title,
        year: req.body.year,
        price: req.body.price,
        imgUrl: req.body.imgUrl
    });

    newManga.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    })
});

module.exports = router;