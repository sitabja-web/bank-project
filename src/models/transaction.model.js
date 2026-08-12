const mongoose = require("mongoose")

const transactionSchema = new mongoose.Schema({
       fromAccount: {
              type:mongoose.Schema.Types.ObjectId,
              ref:"account",
              required: [true  , "Transaction must be associated with a from account"],
              index: true
       },

       toAccount: {
              type:mongoose.Schema.Types.ObjectId,
              ref: "account",
              required: [true , "transaction must be asosciated with a from account"],
              index: true
              
       }
})