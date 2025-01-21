// backend/api/middleware/auth.js
const jwt = require('jsonwebtoken');

// Middleware to check JWT and role (if given)
const auth = (role) => {
  return (req, res, next) => {
    const token = req.header('x-auth-token');  // Assume token is passed as x-auth-token

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
      req.user = decoded.user;  // Attach user data to request

      // If role is passed, check if user has the correct role
      if (role && req.user.role !== role) {
        return res.status(403).json({ msg: 'Access denied, insufficient permissions' });
      }

      next(); // Proceed to the next middleware/route
    } catch (err) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }
  };
};

module.exports = auth;
