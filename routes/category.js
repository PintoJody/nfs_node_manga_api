const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;

const CategoryModel = require('../Models/categoryModel');

router.get('/', (req, res) => {
    CategoryModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

router.get('/:id', (req, res) => {
    CategoryModel.findById(req.params.id, (err, docs) => {
        if(!err) res.send(docs);
        else console.log("Error to get data : " + err);
    })
});

router.post('/', (req, res) => {
    const newCategory = new CategoryModel({
        name: req.body.name
    });

    newCategory.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    })
});

router.put('/:id', (req, res) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send("ID unknow ! " + req.params.id)

    const updateItem = {
        name: req.body.name
    };

    CategoryModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateItem },
        { new: true },
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    )
});

router.delete('/:id', (req, res) => {
    if(!objectId.isValid(req.params.id))
        return res.status(400).send("ID unknow ! " + req.params.id)

        CategoryModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Delete error : " + err);
        })
});

module.exports = router;