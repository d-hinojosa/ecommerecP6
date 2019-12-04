const jwt = require("jsonwebtoken");
const User = require("../Models/User.model");
// Note this is the supper secret for signing the JWT
// this should be acquired via .env or a microservice

const JWT_SECRET = "thisismysecretkey";
// 1. UPDATE THIS FUNCTION TO CREATE AND RETURN A JWT
// The JWT should include all the user data, except the password
// NOTE: The 'user' parameter passed to this function is a mongo document. It needs to be
// transformed using the toObject() method
// https://stackoverflow.com/questions/7503450/how-do-you-turn-a-mongoose-document-into-a-plain-object
// function for creating tokens

function signToken(user) {
  // toObject() returns a basic js object
  // comprised of data from db. Delete password before creating jwt
  const userData = user.toObject();
  delete userData.password;
  return jwt.sign(userData, JWT_SECRET);
  return "thisisafakejsonwebtoken";
}

// 2. UPDATE THIS FUNCTIN TO VERIFY A JWT
// function for verifying tokens
function verifyToken(req, res, next) {

  // 1. grab token from headers (it can be found on property 'token')
  let token = req.get("token") || req.body.token || req.query.token;

  // 2. if no token present, deny access
  if (!token) return res.json({ success: false, message: "No token provided" });

  // 3. otherwise, verify token using jwt.verify
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) return res.json({ success: false, message: "JWT not valid" });
    User.findById(decodedToken._id, (err, user) => {
      if (!user) return res.json({ success: false, message: "User not valid" });
      req.user = user;
      next();
    });
  });

  
  // 4. in callback if problem with token verification, deny access
  // 5. otherwise, look up user on mongdb using _id found on decoded jwt
  // 6. if no user, deny access
  // otherwise, add user object to req object
  //req.user = {"email": "fakeuser@gmail.com"}
  // and execute next
  //next()
}
module.exports = {
  signToken,
  verifyToken
};