const jwt = require('jsonwebtoken');

const auth = (role) => {
    return (req, res, next) => {
        const authHeader = req.header('Authorization');
        if (!authHeader) {
            return res.status(401).send({ error: 'Access denied, no token provided' });
        }

        const token = authHeader.replace('Bearer ', '');
        if (!token) {
            return res.status(401).send({ error: 'Access denied, invalid token' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (role && role !== decoded.role) {
                return res.status(403).send({ error: 'Permission denied' });
            }
            req.user = decoded;
            next();
        } catch (e) {
            return res.status(401).send({ error: 'Invalid token' });
        }
    };
};

module.exports = auth;
