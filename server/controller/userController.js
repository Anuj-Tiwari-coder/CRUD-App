import User from "../models/userModel.js"

export const create = async (req, res) => {
    try {
        const userData = await User.create(req.body)
        if (!userData) {
            return res.status(404).json({ msg: "User Data not Found", userData })
        }
        const savedData = await userData.save()
        res.status(201).json({ msg: "User Created Successfully", savedData })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({ msg: "User data not found" })
        }
        res.status(201).json(userData)

    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const getOne = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).json({ msg: "User not found" })
        }
        res.status(201).json(userExist)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

}

export const Update = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).json({ msg: "User not found" })
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true })
        res.status(201).json({msg: "User Updated Successfully"})
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

export const Delete = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).json({ msg: "User not found" })
        }
        await User.findByIdAndDelete(id)
        res.status(201).json({ msg: "User deleted successfully" })
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}