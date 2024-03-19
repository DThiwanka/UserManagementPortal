const User = require('../models/User');

const GetAllUsers = async (req, res, next) => {

    let users;


    try {
        users = await User.find();

    } catch (error) {
        console.log(error)
    }

    if (!users) {
        return res.status(400).json({ message: "No Users Found!" })
    }
    return res.status(200).json({ users });

}

const CreateUser = async (req, res, next) => {

    const { name, email, connumber, nic, gender, address, points } = req.body;

    let user;

    try {
        user = new User({
            name,
            email,
            connumber,
            nic,
            gender,
            address,
            points,
        });

        await user.save();
    } catch (error) {
        console.log(error)
    }

    if (!user) {
        return res.status(404).json({ message: "User Not Added" })
    } else {
        return res.status(200).json({ user })
    }

}

const GetUserbyNic = async (req, res, next) => {

    const id = req.params.nic;

    let user;

    try {
        user = await User.findOne({ nic: id })

    } catch (error) {
        console.log(error)
    }

    if (!user) {

        return res.status(400).json({ message: "No User Found !" })

    } else {

        return res.status(200).json({ message: `User Found Under NIC ${id}`, user });
    }

}


const UpdateUser = async (req, res, next) => {

    const id = req.params.id;
    const { name, email, connumber, nic, gender, address, points } = req.body;

    let user;

    try {

        user = await User.findByIdAndUpdate(id, {
            name,
            email,
            connumber,
            nic,
            gender,
            address,
            points
        }, { new: true });

        user = await user.save();

    } catch (error) {
        console.log(error)
    }

    if (!user) {
        return res.status(400).json({ message: "User Not Updated !" })
    } else {
        return res.status(200).json({ updatedUser: user });
    }


}

const DeleteUser = async (req, res, next) => {

    const id = req.params.id;

    let user;

    try {

        user = await User.findByIdAndDelete(id);
    } catch (error) {
        console.log(error)

    }

    if (!user) {
        return res.status(404).json({ message: "Unable to Delete User !" })
    } else {

        return res.status(200).json({ message: `User Deleted Under ID : ${id}` })

    }

}


exports.GetAllUsers = GetAllUsers;
exports.CreateUser = CreateUser;
exports.GetUserbyNic = GetUserbyNic;
exports.UpdateUser = UpdateUser;
exports.DeleteUser = DeleteUser;