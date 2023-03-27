import { User } from '../models/user.js';
import bcrypt from 'bcrypt';
import { socialsDefault, professionalDefault, interestsDefaut } from '../constants/route';

module.exports.loginRoute = async (req, res) => {

  const { email, password } = req.body;
  const userData = await User.findOne({ email });

  if (!userData)
    return res.status(200).json({ data: [], msg: "Incorrect email or password" });
    let passowrdCheck = await bcrypt.compare(password, userData.password);
    
  if (!passowrdCheck)
    return res.status(200).json({ data: [], msg: "Email or Password incorrect" });
    return res.status(200).json(data);
};

module.exports.signupRoute = async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return res.status(200).json({ data: [], msg: "User with this email already exists" });
    
  let encryptedPassword = await bcrypt.hash(password, 10);
  let userData = await User.create({
    first_name,
    last_name,
    email,
    phone,
    password: encryptedPassword,
    image: "",
    about_me: "",
    socials: socialsDefault,
    professionalInfo: professionalDefault,
    followers: [],
    interests: interestsDefaut
  });
  let returnData = await User.findOne({ email });
  return res.status(200).json({ data: returnData, msg: "User Created" });
};
