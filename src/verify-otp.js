const speakeasy = require('speakeasy');

const verifyOtp = (token, secret) => {
  const verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
    digits: 4, // Must match the digits used for generation
    step: 120, // Must match the step used for generation
    window: 1, // Optional: to account for clock drift
  });

  return verified;
};

// Export the verifyOtp function
module.exports = { verifyOtp };
