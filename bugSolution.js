const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb', type: '*/*' })); // Parses JSON regardless of Content-Type

app.post('/users', (req, res) => {
  try {
    const user = req.body;
    // ... some logic to handle user creation ...
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error parsing JSON:', error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});