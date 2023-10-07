import User from "../models/User";
const jwt = require('jsonwebtoken');



class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({ errors: ["user or password invalid"] })
    }

    const user = await User.findOne({ where: { email: email } })

    if (!user) {
      return res.status(401).json({ errors: ["user does not exits"] })
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ errors: ["password is incorrect"] })
    }

    const { id } = user

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    })
    return res.json({ token })
  }
}

export default new TokenController();
