const express = require('express');
const db = require('../db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
        .then(cars => {
            res.status(201).json(cars);
        })
        .catch(err => {
            res.status(500).json({message: "Failed to retrieve cars"});
        });
});

router.get('/:id', (req,res) => {
    const { id } = req.params;
    db('cars').where({ id }).first()
        .then(car => {
            res.status(201).json(car);
        })
        .catch(err => {
            res.status(500).json({message: "failed to retrieve car"})
        })
})

router.post('/', (req, res) => {
    const carData = req.body;
    db('cars').insert(carData)
        .then(ids => {
            db('cars').where({ id: ids[0] })
            .then(newCar => {
                res.status(201).json(newCar)
            })
        })
        .catch(err => {
            res.status(500).json({message: "Failed to store car data"})
        })
})

module.exports = router;