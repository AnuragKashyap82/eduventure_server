const mongoose = require("mongoose");

const colorSchema = mongoose.Schema({
    color: {
        required: true,
        type: String,
        trim: true,
    },
});

const ColorModel = mongoose.model("Color", colorSchema);
module.exports = ColorModel;