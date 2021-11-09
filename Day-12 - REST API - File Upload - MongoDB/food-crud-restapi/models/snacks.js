const mongoose = require("mongoose");

const snacks = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unit_price: {
        type: Number,
        required: true
    }
}, {
    // Other model options go here
    tableName: "snacks",
    timestamps: false
});

module.exports = mongoose.model("snacks", snacks)
