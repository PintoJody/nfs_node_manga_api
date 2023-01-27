const mongoose = require('mongoose');

const CategoryModel = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
);

module.exports = Category = mongoose.model('category-api', CategoryModel);