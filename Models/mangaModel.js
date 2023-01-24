const mongoose = require('mongoose');

const MangaModel = mongoose.model(
    "manga-api",
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
        }
    },
    "manga"
);

module.exports = { MangaModel };