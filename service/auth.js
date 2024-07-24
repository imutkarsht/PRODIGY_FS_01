const jwt = require("jsonwebtoken");

const setUser = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        },
        process.env.SECRET
    );
};

const getUser = (token) => {
    if (!token) return null;
    try {
        return jwt.verify(token, process.env.SECRET);
    } catch (error) {
        return null;
    }
};

module.exports = {
    setUser,
    getUser,
};