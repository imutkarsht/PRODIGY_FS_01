const { getUser } = require("../service/auth");
const jwt = require('jsonwebtoken')

const restrictToLoggedInUserOnly = async (req, res, next) => {
    const userUid = req.cookies.uid;
    
    if (!userUid) {
        console.log('No user UID found, redirecting to login.');
        return res.redirect('/login');
    }

    const user = getUser(userUid);

    if (!user) {
        console.log('No user found in session, redirecting to login.');
        return res.redirect('/login');
    }

    req.user = user;
    next();
}

const checkAuth = async (req, res, next) => {
    const userUid = req.cookies.uid;

    const user = getUser(userUid);

    req.user = user;
    next();
}

const checkAdmin = async (req, res, next) => {
    const token = req.cookies.uid;
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        console.log(decoded); 
        const email = decoded.email; 
        console.log('Email:', email);
        if(email === process.env.ADMIN_USER_NAME)
            next();
        else
            res.redirect('/note')
      } catch (err) {
        console.error('Error decoding token:', err);
      }
}

module.exports = {
    restrictToLoggedInUserOnly,
    checkAuth,
    checkAdmin
}
