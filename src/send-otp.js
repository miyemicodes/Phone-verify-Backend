require('dotenv').config();
const twilio = require('twilio');
const speakeasy = require('speakeasy');
const VoiceResponse = require('twilio').twiml.VoiceResponse

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendOtp = async (phoneNumber) => {
  try {
    const secret = speakeasy.generateSecret({ length: 20 });
    const token = speakeasy.totp({
      secret: secret.base32,
      encoding: 'base32',
      digits: 4 // i want only 4 digits otp e.g 1274
    });
    console.log('============token===================');
    console.log(token);
    console.log('====================================');

    // let split into 4 for easy loop => e.g 1274 becomes ['1', '2', '7', '4']
    const splitToken = token.split('');
    const myWords = ['Hello', 'Your', 'token', 'is'];

    // Create TwiML response. this help me create xml for our voice
    const twiml = new VoiceResponse();
    // i want to for the call twice so user can get their otp
    for (let index = 0; index < 2; index++) {
      myWords.forEach(word => {
        twiml.say(word);
        twiml.pause({ length: 1 }); // pause for 1 seconds
      });
      // Add each digit with a pause
      splitToken.forEach(digit => {
        twiml.say(digit);
        twiml.pause({ length: 1 }); // Pause for 1 second between digits
      });
      // Adding a pause between repetitions for clarity
      twiml.pause({ length: 2 }); // Pause for 2 seconds between repetitions
    }

    const call = await client.calls.create({
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
      to: phoneNumber,
      twiml, // we use twiml
    })
    console.log(call.sid);

    // Save the secret for later verification
    // return secret.base32;
    return {
      secretBase32: secret.base32,
      // in case you need it
      twimlString: twiml.toString()
    }
  } catch (error) {
    console.error(error)
  }
};

module.exports = { sendOtp };
