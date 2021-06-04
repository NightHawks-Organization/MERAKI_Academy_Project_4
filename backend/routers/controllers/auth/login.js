const { User } = require("../../../db/models/user");

// fake database
const loginData = { email: "abcd@gmail.com", password: "1234" };


const performLogin = (req, res) => {
  const { email, password } = req.body;

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


module.exports = performLogin;
