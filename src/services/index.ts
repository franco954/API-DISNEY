


var jwt = require("jwt-simple");
var moment = require("moment");
var config = require("./config");

const createToken = (user) => {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

export default createToken;
