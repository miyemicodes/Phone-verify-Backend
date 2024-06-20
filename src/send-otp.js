require('dotenv').config();
const twilio = require('twilio');
const speakeasy = require('speakeasy');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendOtp = (phoneNumber) => {
  const secret = speakeasy.generateSecret({ length: 20 });
  const token = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32'
  });
  console.log('=================token===================');
  console.log(token);
  console.log('====================================');
  client.messages
    .create({
      body: `Your OTP is ${token}`,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
      to: phoneNumber
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));

  // Save the secret for later verification
  return secret.base32;
};

module.exports = { sendOtp };
