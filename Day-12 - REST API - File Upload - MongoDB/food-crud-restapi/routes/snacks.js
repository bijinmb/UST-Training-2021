const express = require("express");
const router = express.Router();
const Snacks = require("../models/snacks");

// getting all snacks 
router.get('/', async (req, res) => {
    try {
        const snacks = await Snacks.find();
        res.json(snacks);
    } catch (err) {
        res.json({ message: err });
    }
});

// getting a post by id

router.get('/:snacksid', async (req, res) => {
    try {
        const snacks = await Snacks.findById(req.params.snacksid);
        res.json(snacks);
    } catch (err) { res.json({ message: err }); }
})

// create a snacks

router.post('/', (req, res) => {
    const snacks = new Snacks({
        name: req.body.name,
        cuisine: req.body.cuisine,
        quantity: req.body.quantity,
        unit_price: req.body.unit_price

    });
    snacks.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err });
    })
});

// deleting a snacks

router.delete('/:snacksid', async (req, res) => {
    try {
        const snacks = await Snacks.deleteOne({ _id: req.params.snacksid });
        res.json(snacks);
    } catch (err) {
        res.json({ message: err });
    }
});

// updating a snacks by id

router.patch('/:snacksid', async (req, res) => {
    try {
        const snacks = await Snacks.findOne({ _id: req.params.snacksid });
        if (req.body.name) {
            snacks.name = req.body.name;
        }
        if (req.body.cuisine) {
            snacks.cuisine = req.body.cuisine;
        }
        if (req.body.quantity) {
            snacks.quantity = req.body.quantity;
        }
        if (req.body.unit_price) {
            snacks.unit_price = req.body.unit_price;
        }
        await snacks.save();
        res.json(snacks);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;







