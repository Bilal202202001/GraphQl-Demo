const jwt = require('jsonwebtoken');

const extractTokenFromCookie = (cookieString) => {
    const cookies = cookieString.split(';').map(cookie => cookie.trim());
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
    if (tokenCookie) {
        const token = tokenCookie.split('=')[1];
        return token;
    } else {
        return null;
    }
};

const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, "UNSAFE_STRING");
        console.log(decodedToken);
        return decodedToken.user_id;
    } catch (error) {
        console.error('Error decoding token:', error.message);
        return null;
    }
};

const getUserNameFromToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, "UNSAFE_STRING");
        return decodedToken.name;
    } catch (error) {
        console.error('Error decoding token:', error.message);
        return null;
    }
};

module.exports = {
    extractTokenFromCookie,
    getUserIdFromToken,
    getUserNameFromToken
};
