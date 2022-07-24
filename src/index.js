// init app
const express = require("express");
const app = express();
app.use(express.json());
const { PORT = 3000 } = process.env;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// routes
const barangRoutes = require("./routes/barang.routes");
app.get("/", (req, res) => res.json("welcome to crud api"));
app.use("/api/barang", barangRoutes);
app.all("*", (req, res) => res.status(404).send("not found"));
