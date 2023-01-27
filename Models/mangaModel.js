const mongoose = require('mongoose');
const Category = require('./categoryModel');

const MangaModel = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        categoryId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "category-api",
            required: false,
            autopopulate: true,
        }]
    },
);

MangaModel.plugin(require('mongoose-autopopulate'));
module.exports = manga = mongoose.model('manga-api', MangaModel);