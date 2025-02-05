const { transporter } = require('./Email.config');
const { Verification_Email_Template, Welcome_Email_Template } = require('./EmailTemplate');

const SendVerificationCode = async (email, verificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: '"Satyam 👻" <saty665566@gmail.com>',
            to: email,
            subject: "Verify your Email",
            text: "Verify your Email",
            html: Verification_Email_Template.replace("{verificationCode}", verificationCode),
        });

        console.log("Email sent successfully", response);
    } catch (error) {
        console.log(error);
    }
};

const welcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: '"Satyam 👻" <saty665566@gmail.com>',
            to: email,
            subject: "Verify your Email",
            text: "Verify your Email",
            html: Welcome_Email_Template.replace("{name}", name),
        });

        console.log("Email sent successfully", response);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { SendVerificationCode, welcomeEmail };
