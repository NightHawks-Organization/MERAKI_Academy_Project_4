const { User } = require("../../../db/models/user");

// fake database
const loginData = { email: "abcd@gmail.com", password: "1234" };




// ================ this code in users schema ===============
users.statics.authenticateBasic = async function (email, password) {
    try {
      const user = await this.findOne({ email });
      if (!user) return ["The email does not exist", 404];
  
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        const payload = {
          userId: user._id,
          email: user.email,
          Role: user.role,
        };

        const options = {
            expiresIn: '60m',
        };
  
        return [jwt.sign(payload, process.env.SECRET, options), 200];
      }
      return ["The password you have entered is not correct", 403];
    } catch (error) {
      throw new Error(error.message);
    }
  };
  // ====================================================



const login = (req, res) => {
  
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

  User.authenticateBasic(email, password)
    .then((result) => {
      if (result[1] === 200)
        return res.status(result[1]).json({ Token: result[0] });

      res.status(result[1]).json(result[0]);
    })
    .catch((err) => {
      res.send(err);
    });
};


module.exports = login;
