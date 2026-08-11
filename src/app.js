const express = require("express")
const cookieParser = require("cookie-parser")
const accountModel = require("./models/account.model")
const app  = express()

app.use(express.json())
app.use(cookieParser())


// routes required

const authRouter = require("./routes/auth.routes")
const accontRouter = require("./routes/account.routes")

//  used routes 

app.use("/api/auth" , authRouter)
app.use("/api/accounts"  , accontRouter)
module.exports  =  app