const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// getting all customers 
router.get('/', async (req, res) => {
    try {
        const customer = await Customer.find();
        res.json(customer);
    } catch (err) {
        res.json({ message: err });
    }
});

// getting a post by id

router.get('/:customerid', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.customerid);
        res.json(customer);
    } catch (err) { res.json({ message: err }); }
})

// create a customer

router.post('/', (req, res) => {
    
    const customer = new Customer({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        location: {
            location_name: req.body.location.location_name,
            state: req.body.location.state,
            city:{ 
                city_name: req.body.location.city.city_name,
                zip_code: req.body.location.city.zip_code
            }
        },
     });

    customer.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err });
    })
});

// deleting a customer

router.delete('/:customerid', async (req, res) => {
    try {
        const customer = await Customer.deleteOne({ _id: req.params.customerid });
        res.json(customer);
    } catch (err) {
        res.json({ message: err });
    }
});

// updating a customer by id

router.patch('/:customerid', async (req, res) => {
    try {
        const customer = await Customer.findOne({ _id: req.params.customerid });
        if (req.body.fname) {
            customer.fname = req.body.fname;
        }
        if (req.body.lname) {
            customer.lname = req.body.lname;
        }
        if (req.body.email) {
            customer.email = req.body.email;
        }
        if (req.body.location.location_name) {
            customer.location.location_name = req.body.location.location_name;
        }
        if (req.body.location.state) {
            customer.location.state = req.body.location.state;
        }
        if (req.body.location.city.city_name) {
            customer.location.city.city_name = req.body.location.city.city_name;
        }
        if (req.body.location.city.zip_code) {
            customer.location.city.zip_code = req.body.location.city.zip_code;
        }

        await customer.save();
        res.json(customer);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;







