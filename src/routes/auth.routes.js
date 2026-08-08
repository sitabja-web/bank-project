const express = reuqire("express")
const authController  = require("../controllers/auth.controller")

const router = express.router()

// api name => /api/auth/register

router.post("/register"   , authController.userResgisterController)


module.exports  = router