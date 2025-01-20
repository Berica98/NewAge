const express = require('express');
const { loginAdmin, registerAdmin, listStudents } = require('../controllers/adminController');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/login', loginAdmin);
router.post('/register', registerAdmin);
router.get('/students', auth('admin'), listStudents); // Protected Route

module.exports = router;
