const mongoose = require ("mongoose")


const ledgerSchema = new mongoose.Schema({
       account: {
              type:mongoose.Schema.Types.ObjectId,
              ref: "account",
              required: [true , "ledger must be associated with an account"],
              index: true,
              immuatable: true    
       },

       amount: {
              type:Number,
              required: [true, "amount is reuqire for creating a ledger entry"],
              immutable:true
       },
})