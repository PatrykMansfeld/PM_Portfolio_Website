const mongoose = require('mongoose')

const educationSchema = mongoose.Schema(
    {
        uniName: {
            type: String,
        },
        FOS: {
            type: String,
        },
        specialization: {
            type: String
        },
        // startingDate: {
        //     type: Date,
        // },
        // graduationDate: {
        //     type: Date
        // }
    },
    {
        timestamps: true
    }
)

const education = mongoose.model('education', educationSchema);
module.exports = education;