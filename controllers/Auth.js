const { SendVerificationCode, welcomeEmail } = require('../middlewares/Email');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');


module.exports.register = async (req, res) => {
    try {
        const { email, name, password} = req.body;
        if (!email || !password || !password) {
            return res.status(400).json({ success: false, message: "All field is required" });
        }

        const userexists = await userModel.findOne({ email })
        if (userexists) {
            return res.status(400).json({ success: false, message: "!User already exists" });
        }
        const hashpassword = await bcrypt.hashSync(password, 10);
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
        const user = new userModel({
            email,
            name,
            password: hashpassword,
            verificationCode
        })

        await user.save();
        SendVerificationCode(user.email, verificationCode);
        return res.json({ success: true, user });

    } catch (error) {
        return res.status(500).json({ success: false, message: "Server fail" });
    }
}


module.exports.verifyEmail = async (req, res) => {
    try {
        const { code } = req.body;
        const user = await userModel.findOne({
            verificationCode: code
        })
        if(!user){
            return res.status(400).json({success:false, message:"Expire code"})
        }

        user.isVerified=true
        user.verificationCode= undefined; 
        await user.save()
        await welcomeEmail(user.email, user.name);
        return res.status(200).json({success:true, message:"Email verified succesful"})
    } catch (error) {
        return res.status(500).json({ success: false, message: "Server fail", error });
    }
}
