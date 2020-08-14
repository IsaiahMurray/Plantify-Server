//
const jwt = require("jsonwebtoken");                          // Question 1---- Import JSON Webtoken
const User = require("../db").import("../models/user");       // 1---- Import user model and require link to database 

const validateSession = (req, res, next) => {
  if(req.method ==='OPTIONS'){                                // 1---- Bypasses CORS -----
    next();
}else{
  const token = req.headers.authorization;                     // store token

  if (!token) {                                                // 1---- If there is no token, throw an error
    return res.status(403).send({ auth: false, message: "No token provided" });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {    
      if (!err && payload) {
        User.findOne({                                            // 1---- If everything is good, find a user and validate them
          where: {
            id: payload.id,
          },
        })
          .then((user) => {
            if (!user) throw err;
            req.user = user;                                        // 1---- if there is no user, pass over
            return next();
          })
          .catch((err) => next(err));                                // 1---- catch any errors and return not authorized with no validation
      }else{
      req.errors = err;
      return res.status(500).send("Not Authorized");}
    });
  }
}
};
module.exports = validateSession;                                 // 1---- export the code
