const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log('Login Attempt:', username); // Log the login attempt

        const user = await User.findOne({ username });
        if (!user || user.role !== 'admin') {
            console.log('User not found or not admin'); // Log if user not found or not an admin
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password Match:', isMatch); // Log if the password matches

        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error); // Log any errors
        res.status(500).json({ message: error.message });
    }
};

exports.registerAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password, role: 'admin' });
        await user.save();
        res.status(201).json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.listStudents = async (req, res) => {
    try {
        const students = await User.find({ role: 'student' });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students' });
    }
};
