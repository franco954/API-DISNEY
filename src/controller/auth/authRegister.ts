

import createToken from "../../services"
import moment from "moment";
import { register } from "../../types";
import { user } from "../../db/models";

let newUser : register;

const authRegister = (req, res) => {

    
    const {username, email_adress, password} = req.body
    if((username || email_adress || password) === undefined)return res.status(404).send('Request incomplete to create new user')

    newUser = {
        id: moment().format(),
        username: username,
        email_adress: email_adress,
        password: password,
        creation_date: moment().format()
    }
    console.log(newUser)

    // user.create({newUser})

    // save en db




    return res.status(200).send({ token: createToken(newUser)});
};


export default authRegister;