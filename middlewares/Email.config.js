const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
    },
});

// 🚀 बढ़ाएँ max listeners limit
// require('events').EventEmitter.defaultMaxListeners = 20;

// const SendEmail = async () => {
//     try {
//         const info = await transporter.sendMail({
//             from: '"Satyam" <saty665566@gmail.com>',
//             to: "gamer77667766@gmail.com",
//             subject: "Placement lagi",
//             text: "Booyah Booyah",
//             html: "<b>Hello world?</b>",
//         });
//         console.log("Email sent successfully:", info);
//     } catch (error) {
//         console.log("Error sending email:", error);
//     }
// };

// SendEmail();

module.exports = { transporter };
