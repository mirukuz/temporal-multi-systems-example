const express = require('express');

const app = express();
const PORT = 3004;

app.get('/send-notification', (req, res) => {
  console.log('Sending notification...');
  // Simulating a failure condition
  if (Math.random() < 0.2) {
    return res.status(500).send('Notification sending failed.');
  }
  res.send('Notification sent successfully!');
});

app.listen(PORT, () => {
  console.log(`Notification Service started on port ${PORT}`);
});