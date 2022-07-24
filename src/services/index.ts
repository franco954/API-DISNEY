

import jwt from 'jwt-simple'
import moment from 'moment'

import TOKEN_SECRET from '../config'


const createToken = (user) => {
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, TOKEN_SECRET);
};

export default createToken;
