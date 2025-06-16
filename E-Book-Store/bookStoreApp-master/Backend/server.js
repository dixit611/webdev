const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 4001;

app.use(cors());
app.use(bodyParser.json());

app.post('/payments', (req, res) => {
  const { method, item } = req.body;

  // Simulate a payment process
  console.log(`Processing payment for ${item.name} using ${method}`);
  
  // Here you would integrate with actual payment APIs like Google Pay, PhonePe, etc.
  // Simulating success or failure
  const paymentSuccess = Math.random() > 0.2; // 80% chance of success

  if (paymentSuccess) {
    res.json({ status: 'success', message: `Payment successful with ${method}` });
  } else {
    res.json({ status: 'failure', message: `Payment failed with ${method}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
