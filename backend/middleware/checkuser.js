var jwt = require("jsonwebtoken");
const JWT_SECRET = "Abhayyisagoodb$oy";

const checkuser = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res
      .status(401)
      .send({ error: "Please authenticate using a valid token", success: 0 });
  } else {
    try {
      const data = jwt.verify(token, JWT_SECRET);

      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token", success: 0 });
    }
  }
};

module.exports = checkuser;

// session({

//     secret:"abhay",
//     resave:false,
//     saveUninitialized:true,

// })
