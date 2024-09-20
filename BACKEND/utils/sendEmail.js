const nodemailer = require('nodemailer')
const dotenv = require('dotenv');
dotenv.config();
const mail = process.env.SMTP_MAIL
const password  = process.env.SMTP_PASSWORD

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: mail,
      pass: password,
    },
  });

  const mailOptions = {
    from: mail,
    to: options.email,
    subject: options.subject,
    text: `
Name: ${options.userName}
Email: ${options.userEmail}
Phone: ${options.userPhone}

Message:
${options.message}
    `,
  };
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail