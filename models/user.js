const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        email:{
            type: String,
            required: true,
            unique:true
        },
        name:{
            type: String,
            required: true,
        },
        password:{
            type: String,
            required: true,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        verificationCode: String
    },{timeStamps: true}
)

module.exports = mongoose.model("Users", userSchema);

