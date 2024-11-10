const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Секретный ключ для подписи токенов
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());

// Имитация базы данных пользователей
const users = [
  { id: 1, username: 'user1', password: '$2a$10$F6lzB2RixQ3TnOSGfM0jAeIol3Bv/D2qYd.RQ.eHqZTnSlo4e61mu' } // Пароль: 'password123'
];

// Маршрут для авторизации
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  // Проверка пароля
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) throw err;
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Создание JWT
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  });
});

// Защищенный маршрут
app.get('/protected', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    res.json({ message: 'Protected data', userId: decoded.userId });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
