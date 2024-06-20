const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dbFolder = path.join(__dirname, 'db');

// Endpoint untuk registrasi pengguna
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;
  const userData = { username, email, password };

  // Simpan data pengguna ke file JSON dengan nama username.json
  const fileName = `${username}.json`;
  const filePath = path.join(dbFolder, fileName);

  fs.writeFile(filePath, JSON.stringify(userData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
