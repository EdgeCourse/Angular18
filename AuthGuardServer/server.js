// server.js
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET = 'super-secret-key';

app.use(cors());
app.use(bodyParser.json());

const USER = { email: 'test@example.com', password: '123456' };

// POST /login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === USER.email && password === USER.password) {
    const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Token middleware
function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// GET /protected-data
app.get('/protected-data', authenticateToken, (req, res) => {
  res.json({ message: 'You accessed protected data!', user: req.user });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
