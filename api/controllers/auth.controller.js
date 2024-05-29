import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { fullname, email, number, address, password } = req.body;

  if (
    email === "" ||
    password === "" ||
    number === "" ||
    address === "" ||
    fullname === ""
  ) {
    return res.status(400).json({ error: "Please add all the fields" });
  }

  const hatchedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    fullname,
    email,
    password: hatchedPassword,
    number,
    address,
  });

  try {
    await newUser.save();

    res.json({ message: "User saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
