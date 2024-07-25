const user = require("../models/user")
const { setUser } = require("../service/auth")

const handleUserSignup = async (req, res) => {
    const { username, email, password } = req.body
    const newUser = await user.create({
        username,
        email,
        password
    })
    if(!newUser) res.send({
        message: "failed to create new user",
        status: 0
    })
    else{
        return res.redirect('/login?message=account%20created%20login%20now');
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
    return res.redirect('/note?message=logged%20in%20successfully')
}

const handleUserLogout = (req, res) => {
    res.clearCookie('uid', { path: '/' });
    res.redirect('/?message=log%20out%20successfully')
  }
module.exports = {
    handleUserSignup,
    handleUserLogin,
    handleUserLogout
}