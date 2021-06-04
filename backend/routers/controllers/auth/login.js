// fake database
const loginData = { email: "abcd@gmail.com", password: "1234" };


const performLogin = (req, res) => {
  if (
    req.body.email === loginData.email &&
    req.body.password === loginData.password
  ) {
    res.status(200).jason("login successful");
  } else {
    res.status(401).jason("login failed");
  }
};


module.exports = performLogin;
