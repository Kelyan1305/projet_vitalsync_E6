const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`VitalSync API listening on :${PORT}`);
  });
}

module.exports = app;
