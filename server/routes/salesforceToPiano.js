const express = require('express');
const router = express.Router();
const salesforceToPianoController = require('../controllers/salesforceToPiano');

router.post('/', async (req, res) => {
    let salesforceInfo = req.body;

    try {
        const newSObject = await salesforceToPianoController.post(salesforceInfo);

        res.json(newSObject);
    } catch(e) {
        res.status(404).send(e);
    }
});

router.post('/fields', async (req, res) => {
    let fields = req.body;

    try {
        const newFields = await salesforceToPianoController.fields(fields);
        res.json(newFields);
    } catch(e) {
        res.status(404).send(e);
    }
});

module.exports = router;