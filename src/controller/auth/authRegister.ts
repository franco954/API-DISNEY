

import createToken from "../../services"
import moment from "moment";

const authRegister = (req, res) => {

    
    const {username, email_adress, password} = req.body
    if((username || email_adress || password) === undefined)return res.status(404).send('Request incomplete to create new user')

    let newUser = {
        username: username,
        email_adress: email_adress,
        password: password,
        creation_date: moment().format()
    }
    console.log(newUser)
    // save en db

    return res.status(200).send({ token: createToken(newUser)});
};


export default authRegister;