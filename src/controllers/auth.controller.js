const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const emailService = require("../services/email.services");

// POST /api/auth/register
async function userRegisterController(req, res) {
    const { email, name, password } = req.body;

    const isExists = await userModel.findOne({ email });

    if (isExists) {
        return res.status(422).json({
            message: "User already exists with this email",
            status: "failed"
        });
    }

    // Create user
    const user = await userModel.create({
        email,
        password,
        name
    });

    // Send registration email
    await emailService.sendRegistrationEmail(
        user.email,
        user.name
    );

    // Create JWT token
    const token = jwt.sign(
        { userID: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    );

    // Store token in cookie
    res.cookie("token", token);

    // Send response
    return res.status(201).json({
        message: "Registration successful",
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    });
}


// POST /api/auth/login
async function userLoginController(req, res) {
    const { email, password } = req.body;

    // Find user and include password
    const user = await userModel
        .findOne({ email })
        .select("+password");

    if (!user) {
        return res.status(401).json({
            message: "Email or password is invalid"
        });
    }

    // Compare entered password
    const isValidPassword = await user.comparePassword(password);

    if (!isValidPassword) {
        return res.status(401).json({
            message: "Email or password is invalid"
        });
    }

    // Create JWT
    const token = jwt.sign(
        { userID: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    );

    // Store token in cookie
    res.cookie("token", token);

    return res.status(200).json({
        message: "Login successful",
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    });
}


module.exports = {
    userRegisterController,
    userLoginController
};