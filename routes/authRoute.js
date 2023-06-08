const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  registerController,
  loginController,
  testController,
} = require("../controllers/authController");

const router = express.Router();

//register | method post
router.post("/register", registerController);

//login | method post
router.post("/login", loginController);

//register | method post
router.post("/test", requireSignIn, isAdmin, testController);

//register | method post
router.post("/user-auth", requireSignIn, (req, res) => {
  return res.status(200).send({ ok: true });
});

module.exports = router;
