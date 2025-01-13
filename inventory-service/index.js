const express = require('express');

const app = express();
const PORT = 3002;

app.get('/check-inventory', (req, res) => {
  console.log('Checking inventory...');
  // Simulating a failure condition
  if (Math.random() < 0.2) {
    return res.status(500).send('Inventory check failed.');
  }
  res.send('Inventory checked and reserved!');
});

app.listen(PORT, () => {
  console.log(`Inventory Service started on port ${PORT}`);
});