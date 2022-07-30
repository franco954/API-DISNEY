

import createToken from "../../services";
const users = require('../../mock/users.json');

const authLoggin = (req, res) => {
    
    const {username} = req.body 
    if(!req.body.username || !req.body.password)return res.status(404).send('empty request')
    if(users.find(obj => obj.username === username.toLowerCase()))return res.status(200).send({ token: createToken(username)});
    
    
    return res.status(404).send('user not registered')
}




export default authLoggin;