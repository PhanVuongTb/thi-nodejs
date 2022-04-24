import User from '../models/user'


export const signup = async (req, res) => {
    const { email, name, password } = req.body
    try {
        const exitsUser = await User.findOne({ email }).exec()
        if (exitsUser) {
            return res.status(400).json({
                message: "User da ton tai"
            })
        }
        const user = await User({ email, name, password }).save()
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        console.log(error);
    }
}


export const signin = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email }).exec()
    if (!user) {
        return re.status(400).json({
            message: "User khong ton tai"
        })
    }
    if (!user.authenticate(password)) {
        return res.status(400).json({
            message: "Mat khau khong dung"
        })
    }
    return res.json({
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}