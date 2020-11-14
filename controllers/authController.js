
const jwt = require('jsonwebtoken')
const AuthenticateUser = require('../Utils/AuthenticateUser')
exports.signUp = async (req, res) => {
    try {

    } catch (error) {
        console.log(error)
    }
}
exports.signIn = async (req, res) => {
    try {
        // Getting the Request Body
        const {email, password} = req.body;
        const auth = new AuthenticateUser(email, password)

        const user = await auth.findUser()
        if (!user) return res.status(403).json({message: 'user not found'})

        const passwordEquals = await auth.verifyPassword(user)
        if (!passwordEquals) return res.status(403).json({message: 'password incorret'})

        const rol = await auth.findRol()
        // Create a token
        const payload = {
            iduser: user.id,
            rol
        }

        const token = jwt.sign(payload,
            process.env.SECRET_KEY, {
            expiresIn: 3600, // 24 hours
        });
        return res.status(200).json({token});
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
