# OTP System with Twilio and Speakeasy

This project is a simple Node.js application that generates and sends OTP (One-Time Password) codes using Twilio and verifies them using Speakeasy. It includes endpoints to send and verify OTPs.

## Features

- Generate OTP using Speakeasy
- Send OTP via Twilio SMS
- Verify OTP entered by the user
- Environment variable configuration for sensitive information

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Twilio account

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/otp-system.git
   cd otp-system



Install the dependencies:

sh
Copy code
npm install
Create a .env file:

Create a .env file in the root of the project and add your Twilio credentials:


Copy code
``` sh
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

Usage
Running the Application
Development Mode
To run the application in development mode with Nodemon:

sh
Copy code
npm run dev
Production Mode
To run the application in production mode:

sh
Copy code
npm start
Endpoints
Send OTP
URL: /send-otp
Method: POST
Body Parameters:
phoneNumber: The phone number to which the OTP will be sent (in E.164 format).
Example request:


## Project Structure

```perl
otp-system/
├── node_modules/
├── .env
├── package.json
├── package-lock.json
├── send-otp.js
├── verify-otp.js
└── server.js
```

#### File Descriptions

- .env: Environment variables file containing Twilio credentials.
package.json: Contains metadata about the project and dependencies.

- send-otp.js: Generates and sends OTP using Twilio.
verify-otp.js: Verifies OTP using Speakeasy.

- server.js: Sets up the Express server and defines the endpoints for sending and verifying OTP.
Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js.

- body-parser: Node.js body parsing middleware.
speakeasy: Two-factor authentication for Node.js. One-time passcode generator (HOTP/TOTP) with support for Google Authenticator.

- twilio: Twilio Node.js helper library.

- dotenv: Loads environment variables from a .env file.

- nodemon: Tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
Godfrey Elizabeth


### Summary

- The `README.md` includes sections for features, prerequisites, installation, usage, endpoints, project structure, dependencies, license, and author information.
- Replace placeholders like `your_account_sid`, `your_auth_token`, `your_twilio_phone_number`, and `Your Name` with actual values before using the `README.md`.
- The instructions cover setting up the project, running it in different modes, and using the endpoints to send and verify OTPs.







