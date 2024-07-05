import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { method, item } = req.body;

  // Simulate a payment process
  console.log(`Processing payment for ${item.name} using ${method}`);
  
  // Simulating success or failure
  const paymentSuccess = Math.random() > 0.2; // 80% chance of success

  if (paymentSuccess) {
    res.json({ status: "success", message: `Payment successful with ${method}` });
  } else {
    res.json({ status: "failure", message: `Payment failed with ${method}` });
  }
});

export default router;
