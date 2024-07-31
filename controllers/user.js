require('dotenv').config()
const user = require("../models/user")
const bcrypt = require('bcrypt')
const { setUser } = require("../service/auth")

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const handleUserSignup = async (req, res) => {
    const { username, email, password } = req.body;
    
    if (!isValidEmail(email)) {
        return res.redirect('/signup?message=Invalid%20email%20address');
    }

    if(password.length <= 4) return res.redirect('/signup?message=password%20is%20too%20short')
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await user.create({
            username,
            email,
            password: hashedPassword
        });
        if (!newUser) {
            return res.send({
                message: "Failed to create new user",
                status: 0
            });
        }
        return res.redirect('/login?message=account%20created%20login%20now');
    } catch (error) {
        return res.redirect('/signup?message=user%20Already%20exists%20')
    }
};

const handleUserLogin = async (req, res) => {
    const { email, password } = req.body;
   
    try {
        const existingUser = await user.findOne({ email });
        if (!existingUser) {
            return res.redirect('/login?message=invalid%20username%20or%20password');
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.redirect('/login?message=invalid%20username%20or%20password');
        }
        const token = setUser(existingUser);
        res.cookie('uid', token);
        return res.redirect('/note?message=logged%20in%20successfully');
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: "Login failed",
            status: 0
        });
    }
};

const handleUserLogout = (req, res) => {
    res.clearCookie('uid', { path: '/' });
    res.redirect('/?message=log%20out%20successfully')
  }
module.exports = {
    handleUserSignup,
    handleUserLogin,
    handleUserLogout
}