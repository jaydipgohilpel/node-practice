const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: String,
    email: {
        type: String,
        // unique: true,
        // validate: {
        //     validator: (str) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(str),
        //     message: (props) => `${props.value} is not a valid email.`
        // },
        required: true,
    },
    password: {
        type: String,
        minLength: 6,
        required: true        
    },
    token: String
});

exports.User = mongoose.model('user', userSchema);