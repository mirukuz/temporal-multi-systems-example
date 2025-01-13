const express = require('express');

const app = express();
const PORT = 3003;

app.get('/process-payment', (req, res) => {
  console.log('Processing payment...');
  // Simulating a failure condition
  if (Math.random() < 0.2) {
    return res.status(500).send('Payment failed.');
  }
  res.send('Payment processed successfully!');
});

app.listen(PORT, () => {
  console.log(`Payment Service started on port ${PORT}`);
});