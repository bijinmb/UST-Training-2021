const express = require("express");
const router = express.Router();
const Food = require("../models/foods");

// getting all foods 
router.get('/', async (req, res) => {
    try {
        const food = await Food.find();
        res.json(food);
    } catch (err) {
        res.json({ message: err });
    }
});

// getting a post by id

router.get('/:foodid', async (req, res) => {
    try {
        const food = await Food.findById(req.params.foodid);
        res.json(food);
    } catch (err) { res.json({ message: err }); }
})

// create a food

router.post('/', (req, res) => {
    const food = new Food({
        name: req.body.name,
        cuisine: req.body.cuisine,
        quantity: req.body.quantity,
        unit_price: req.body.unit_price

    });
    food.save().then(data => {
        res.json(data);
    }).catch(err => {
        res.json({ message: err });
    })
});

// deleting a food

router.delete('/:foodid', async (req, res) => {
    try {
        const food = await Food.deleteOne({ _id: req.params.foodid });
        res.json(food);
    } catch (err) {
        res.json({ message: err });
    }
});

// updating a food by id

router.patch('/:foodid', async (req, res) => {
    try {
        const food = await Food.findOne({ _id: req.params.foodid });
        if (req.body.name) {
            food.name = req.body.name;
        }
        if (req.body.cuisine) {
            food.cuisine = req.body.cuisine;
        }
        if (req.body.quantity) {
            food.quantity = req.body.quantity;
        }
        if (req.body.unit_price) {
            food.unit_price = req.body.unit_price;
        }
        await food.save();
        res.json(food);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;







