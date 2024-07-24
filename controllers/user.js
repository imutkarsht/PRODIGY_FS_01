const user = require("../models/user")
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
        return res.render('login', {
            error: 'Invalid username or password'
        })
    }
    const token = setUser(isUser)  
    res.cookie('uid', token)
    console.log('login successful');
    return res.redirect('/note')
}

const handleUserLogout = (req, res) => {
    res.clearCookie('uid', { path: '/' });
    res.redirect('/')
  }
module.exports = {
    handleUserSignup,
    handleUserLogin,
    handleUserLogout
}