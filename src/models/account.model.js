const mongoose = require("mongoose")
const { createTestAccount } = require("nodemailer")

const acccountSchema = new mongoose.Schema({
       user: {
              type: mongoose.Schema.ObjectId,
              ref: "user",
              required: [true ,  "account must be associated with a user"]
       },

       status: {
              enum: {
                     values: ["ACTIVE"  , "FROZEN"  , "CLOSED"],
                     message: "status can be either active , frozen or closed"
              }
       },

       currency: {
              type:String,
              required: [true , " currency is required for creating an accoutnt " ],
              default: "INR"
       }, {
              timestamps: true
       }
})


acccountSchema.index({user:1  ,status:1})


const accountModel = mongoose.model("account"  ,acccountSchema)
module.exports  = accountModel