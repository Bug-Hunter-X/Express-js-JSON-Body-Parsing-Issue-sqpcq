const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // ... some logic to handle user creation ...
  res.status(201).json({ message: 'User created successfully' });
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});