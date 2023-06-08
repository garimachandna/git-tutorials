const users = require("../models/userModel.js").User;
const { hashPassword, comparePassword } = require("../helpers/authHelper.js");

const JWT = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //validations
    if (!name || !email || !password) {
      return res.status(400).send({
        message: "Please enter all fields",
        success: false,
      });
    }

    //check user
    const existingUser = await users.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        message: "User already exists",
        success: false,
      });
    }

    //hash password
    const hashedPassword = await hashPassword(password);

    //register user
    const user = await users.create({
      name,
      email,
      password: hashedPassword,
    });

    //send response
    // console.log(user.password);
    return res.status(201).send({
      message: "User registered successfully",
      success: true,
      user: user,
    });
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.white);
    res.status(500).send({
      message: "Error in registering user",
      success: false,
      error: err.message,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validations
    if (!email || !password) {
      return res.status(400).send({
        message: "Please enter all fields",
        success: false,
      });
    }

    //check user
    const user = await users.findOne({ email });
    if (!user) {
      return res.status(400).send({
        message: "User does not exists",
        success: false,
      });
    }

    //compare password
    console.log(password, " ", user.password);
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(400).send({
        message: "Invalid credentials",
        success: false,
      });
    }

    //generate token
    const token = JWT.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7 days",
      }
    );

    //send response
    return res.status(200).send({
      message: "User logged in successfully",
      success: true,
      token: token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.white);
    res.status(500).send({
      message: "Error in logging in user",
      success: false,
      error: err.message,
    });
  }
};

const testController = async (req, res) => {
  res.send("protected route");
};

module.exports = {
  registerController,
  loginController,
  testController,
};
