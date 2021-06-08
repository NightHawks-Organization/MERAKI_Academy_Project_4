const { User } = require("../../../db/models/user");

const login = (req, res) => {
  
    const email = req.body.email.toLowerCase();
    const password = req.body.password;

  User.authenticateBasic(email, password)
    .then((result) => {
      if (result[1] === 200)
        return res.status(result[1]).json({ Token: result[0],userId:result[2],role:result[3] });

      res.status(result[1]).json(result[0]);
    })
    .catch((err) => {
      res.send(err);
    });
};


module.exports = {
	login,
};
