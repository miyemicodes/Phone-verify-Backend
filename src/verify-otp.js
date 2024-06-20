const speakeasy = require('speakeasy');

const verifyOtp = (token, secret) => {
  const verified = speakeasy.totp.verify({
    secret: secret,
    encoding: 'base32',
    token: token,
    window: 1
  });

  return verified;
};

// Export the verifyOtp function
module.exports = { verifyOtp };
