const router = require("express").Router();
const User = require("../Modals/userModal");
const bcrypt = require("bcrypt");

// Register User
router.post("/register", async (req, res) => {
  try {
    //Generate New Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.send("User Created");
  } catch (err) {
    console.error(err);
  }
});

//Login User

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).send("User not found");
    const password = await bcrypt.compare(req.body.password, user.password);
    !password && res.status(404).send("Wrong Password");
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
  }
});
module.exports = router;
