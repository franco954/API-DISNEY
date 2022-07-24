

import createToken from "../../services"

const authRegister = (req, res) => {
    var user = {
        id: 1,
    }
    return res.status(200).send({ token: createToken(user)});
};


export default authRegister;