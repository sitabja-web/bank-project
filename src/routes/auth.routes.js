const express = require("express")
const authController  = require("../controllers/auth.controller")

const router = express.Router()

// api name => /api/auth/register

router.post("/register"   , authController.userRegisterController)

// post /api/auth/login
router.post("/login",authController.userLoginController)

module.exports  = router