const mongoose = require("mongoose");

const customer = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location:{
        location_name:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        city:{
            zip_code:{
                type: String,
                required: true
            },
            city_name:{
                type:String,
                required: true
            }
        }

    }

}, {
    // Other model options go here
    tableName: "customers",
    timestamps: false
});

module.exports = mongoose.model("customers", customer)
