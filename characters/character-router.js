const express = require('express');
const charModel = require('./character-model');
const router = express.Router();

router.get('/characters', async (req, res, next) => {
    try {
        const names = await charModel.list();
        if (names) {
            res.status(200).json(names)
        } else {
            res.status(400).json({ message: 'error finding names' })
        }
    } catch (err) {
        next(err);
    }
})

module.exports = router;