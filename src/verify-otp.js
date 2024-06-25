const speakeasy = require('speakeasy');

const verifyOtp = (token, secret) => {
  const verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
    window: 1,
    step: 120 // 2 minutes
  });

  return verified;
};

// Export the verifyOtp function
module.exports = { verifyOtp };
