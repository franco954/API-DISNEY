

import createToken from "../../services"

const authLoggin = (req, res) => {
    var user = {
        id: 1,
    }
    return res.status(200).send({ token: createToken(user)});
};


export default authLoggin;