const user = require("../models/user")
const { v4: uuidv4 } = require('uuid')
const { setUser } = require("../service/auth")

const handleUserSignup = async (req, res) => {
    const { username, email, password } = req.body
    const newUser = await user.create({
        username,
        email,
        password
    })
    if(!newUser) console.log('failed to create user')
    else{
        console.log('user created');
        return res.redirect('/note')
    }
}

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body
    const isUser = await user.findOne({ email, password })

    if(!isUser){
        console.log('invalid username or password')
        return res.render('login', {
            error: 'Invalid username or password'
        })
    }
    const sessionId = uuidv4()
    setUser(sessionId, isUser)  // Use isUser instead of user
    res.cookie('uid',sessionId)
    console.log('login successful');
    return res.redirect('/note')
}

module.exports = {
    handleUserSignup,
    handleUserLogin
}