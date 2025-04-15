const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const accountSid = 'YOUR_ACCOUNT_SID'; // Weka SID kutoka Twilio
const authToken = 'YOUR_AUTH_TOKEN';   // Weka token yako kutoka Twilio
const client = twilio(accountSid, authToken);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/whatsapp', (req, res) => {
    const msg = req.body.Body.toLowerCase();
    const from = req.body.From;

    let reply = "Samahani, sijakuelewa.";

    if (msg.includes('habari')) {
        reply = "Habari pia! Karibu.";
    } else if (msg.includes('jina')) {
        reply = "Mimi ni WhatsApp bot wako.";
    }

    client.messages.create({
        body: reply,
        from: 'whatsapp:+14155238886', // Hii ni sandbox number ya Twilio
        to: from
    });

    res.send('<Response></Response>');
});

app.listen(3000, () => {
    console.log('Bot iko hewani kwenye http://localhost:3000');
});
