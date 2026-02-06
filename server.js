require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "payment-backend" });
});

const PORT = process.env.PORT || 4000;

app.post("/roundup-donation", (req, res) => {
  const { amount, source } = req.body;

  console.log("Round-up donation request:", amount, source);

  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log("Payment backend running on port", PORT);
});
