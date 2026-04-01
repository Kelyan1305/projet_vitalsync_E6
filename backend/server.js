const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "vitalsync-api",
    uptime: process.uptime(),
    checkedAt: new Date().toISOString()
  });
});

app.get("/api/version", (req, res) => {
  res.json({ version: "1.0.0" });
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

