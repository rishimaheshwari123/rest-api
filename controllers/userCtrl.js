const userModel = require("../models/userModel");
const useCtrl = (req, res) => {
    res.send("sab kuch badal gya mera")
}


const addUser = (req, res) => {
    const { data } = req.body;
    res.json({
        success: true,
        message: `Welcome Rishi`,
        data
    })
}

// create user  
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.create({ name, email, password })
        res.status(201).send({
            success: true,
            message: "User created successfully",
            user
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "faild to create user" })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        res.status(200).send({
            success: true,
            users
        })
    } catch (error) {
        res.status(400).json({ message: "faild to get all  user" })
    }
}

const getSingleUsers = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if (user) {
            res.status(200).send({ user })
        } else {
            res.status(400).json("user not found")
        }
    } catch (error) {
        res.status(400).json({ message: "faild to get single  user" })

    }
}

// update by id 
const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(201).send(updatedUser)
    } catch (error) {
        res.status(400).send({ message: "User update faild" })
    }
}



// update by id 

// const updateUser = async (req, res) => {
//     try {
//         const user = await userModel.findById(req.params.id);
//         if (user) {
//             user.name = req.body.name || user.name,
//                 user.email = req.body.email || user.email
//             if (req.body.password) {
//                 user.password = req.body.password
//             }
//             const update = await user.save();;
//             res.status(201).send({ update, message: "User update successfully" })
//         }
//     } catch (error) {
//         res.status(400).send({ message: "User update faild" })
//     }
// }



// delete user  
const deleteUser = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.status(201).send("user deleted successfully")
    } catch (error) {
        res.status(401).send("user can not  deleted")

    }
}
module.exports = { useCtrl, addUser, createUser, getAllUsers, getSingleUsers, updateUser, deleteUser }