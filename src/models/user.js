import mongoose from "mongoose";

const user = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, { timestamps: true })

user.methods = {
    authenticate(password) {
        try {
            return this.password == this.encrytPassword(password)
        } catch (error) {
            console.log(error);
        }
    },
    encrytPassword(password) {
        if (!password) return
        try {
            return createHmac('sha256', '123456').update(password).digest('hex')
        } catch (error) {
            console.log(error);
        }
    }
}
user.pre("save", function (next) {
    try {
        this.password = this.encrytPassword(this.password)
        next()
    } catch (error) {
        console.log(error);
    }
})



export default mongoose.model("User", user)