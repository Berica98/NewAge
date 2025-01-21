const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs'); // For password hashing
const cors = require('cors'); // For enabling CORS requests

// Load environment variables from .env file
dotenv.config({ path: '../.env' });

// Initialize Express app
const app = express();
app.use(cors()); // Enable CORS support
app.use(express.json()); // Parse incoming JSON requests

console.log('MONGO_URI:', process.env.MONGO_URI); // Log MongoDB URI for troubleshooting

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

// Define Mongoose Admin model
const Admin = mongoose.model('Admin', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));

// Define Mongoose Student model
const Student = mongoose.model('Student', new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));

// Utility function to hash passwords
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Root Route to Test if the server is up and running
app.get('/', (req, res) => {
  res.send('Backend Server is Running');
});

// Admin Registration Route
app.post('/admin/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).send({ message: 'Admin already exists in database.' });
    }
    admin = new Admin({ email, password: await hashPassword(password) });
    await admin.save();
    res.status(201).send({ message: 'Admin registered successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to register Admin.' });
  }
});

// Admin Login Route
app.post('/admin/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).send({ message: 'Admin not found.' });
    }
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid credentials.' });
    }
    res.status(200).send({ message: 'Admin logged in successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to login Admin.' });
  }
});

// Student Registration Route
app.post('/student/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (student) {
      return res.status(400).send({ message: 'Student already exists in database.' });
    }
    student = new Student({ email, password: await hashPassword(password) });
    await student.save();
    res.status(201).send({ message: 'Student registered successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to register Student.' });
  }
});

// Student Login Route
app.post('/student/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let student = await Student.findOne({ email });
    if (!student) {
      return res.status(400).send({ message: 'Student not found.' });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid credentials.' });
    }
    res.status(200).send({ message: 'Student logged in successfully!' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to login Student.' });
  }
});

// Student List Route
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).send({ message: 'Failed to fetch students.' });
  }
});

// Import additional routes
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes');

app.use('/admin', adminRoutes);
app.use('/students', studentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
