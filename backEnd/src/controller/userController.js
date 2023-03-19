import {addNewUser} from '../services/userService.js';

//user add
export const addUser = async (req, res) => {
    const body = req.body;    
    const data = await addNewUser(body);

    if (data) {
        res.status(200).json({
            success: true,
            message: "User Successfully Register...",
            result: data
        })
    }
    else {
        res.status(400).json({
            success: false,
            message: "User not Register...",
        })
    }
}
