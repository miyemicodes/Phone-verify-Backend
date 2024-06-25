require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sendOtp } = require('./src/send-otp');
const { verifyOtp } = require('./src/verify-otp');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let userSecrets = {}; // In-memory storage for secrets (use a database in production)

app.post('/send-otp', async (req, res) => {
  try {
    const phoneNumber = req.body.phoneNumber;
    const optData = await sendOtp(phoneNumber);
    userSecrets[phoneNumber] = optData.secretBase32;
    res.send('OTP sent successfully.');
  } catch (error) {
    throw error;
  }
});

app.post('/verify-otp', (req, res) => {
  const { phoneNumber, token } = req.body;
  const secret = userSecrets[phoneNumber];

  if (!secret) {
    return res.status(400).send('OTP not sent or expired.');
  }

  const isVerified = verifyOtp(token, secret);
  if (isVerified) {
    res.send('OTP verified successfully.');
  } else {
    res.status(400).send('Invalid OTP.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
