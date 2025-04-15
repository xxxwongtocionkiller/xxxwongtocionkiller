const twilio = require('twilio');
const { accountSid, authToken, fromNumber } = require('../config/config');

const client = twilio(accountSid, authToken);

function sendMessage(to, body) {
    client.messages.create({
        body,
        from: fromNumber,
        to
    }).then(msg => console.log('Message sent:', msg.sid))
      .catch(err => console.error('Failed:', err));
}

module.exports = { sendMessage };
