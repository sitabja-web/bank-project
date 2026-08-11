const mongoose = require("mongoose")

const acccountSchema = new mongoose.Schema({
       user: {
              type: mongoose.Schema.ObjectId,
              ref: "user",
              required: [true ,  "account must be associated with a user"]
       },

       status: {
              enum: {
                     values: ["ACTIVE"  , "FROZEN"  , "CLOSED"],
                     message:

              }
       }
})