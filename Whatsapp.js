const express = require('express');
const router = express.Router();
const replyLogic = require('../helpers/replyLogic');
const { sendMessage } = require('../services/twilioService');

router.post('/', (req, res) => {
    const message = req.body.Body;
    const from = req.body.From;

    const reply = replyLogic(message);

    sendMessage(from, reply);

    res.send('<Response></Response>');
});

module.exports = router;
