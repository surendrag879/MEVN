import { login } from '../services/loginService.js'
import jwt from 'jsonwebtoken';

//login 
export const loginAdmin = async (req, res) => {
    const body = req.body;
    const data = await login(body);
    console.log('data', data)
    if (data) {
        const {id, username, email} = data;
        console.log('loginControllerData', id, username, email)
        let jwtSecretKey = process.env.jwtSecretKey;
        const token = jwt.sign(
            {
                id,
                email,
                username
            },
            jwtSecretKey,
            {
                expiresIn: 60*60*24*30,
                algorithm: "HS256"
            });
        res.setHeader('Authorization', 'Bearer ' + token);

        res.status(200).json({
            success: true,
            message:"Login Success",
            id: id,
            username: username,
            email: email,
            authorization: token
        })

    }
    else {
        res.status(401).json({
            success: false,
            message:"Login failed"
        })
    }
}
