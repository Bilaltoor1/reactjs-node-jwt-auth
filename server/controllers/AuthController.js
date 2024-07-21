import User from "../models/UserModel.js"
import pkg from 'jsonwebtoken';
const { sign } = pkg;
const maxAge = 3 * 24 * 60 * 60 * 1000 // 3 days in milliseconds
const createToken = (email, id) => {
    return sign({ email, id }, process.env.JWT_KEY, {
        expiresIn: maxAge
    })
}
export const signup = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields' })
        }
        const user = await User.create({ email, password })

        res.cookie('jwt', createToken(user.email, user._id), {
            sameSite: "None",
            secure: true,
            maxAge
        })
        res.status(201).json({
            user: {
                email: user.email,
                id: user._id
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: 'Please fill in all fields' })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        const isMatch = password === user.password
        console.log(isMatch)
        if (!isMatch) {
            return res.status(404).json({ message: 'Invalid credentials' })
        }
        res.cookie('jwt', createToken(user.email, user._id), {
            sameSite: "None",
            secure: true,
            maxAge
        })
        res.status(200).json({
            user: {
                email: user.email,
                id: user._id
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}