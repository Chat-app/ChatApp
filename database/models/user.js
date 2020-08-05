const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    Id: {
        type: Number
    },
    bio: {
        type: String
    },
    avatar: {
        type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    listOfFriends: {
        type: Array
    },
    listOfChatRoom: {
        type: Array
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    numberOfUnRead: {
        type: Number
    },
    gender: {
        type: String
    }
},
    { timestamps: true })

userSchema.index({ "fullName": "text" })
let user = mongoose.model('user', userSchema);

module.exports = user