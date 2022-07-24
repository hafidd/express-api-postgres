const express = require("express");
const router = express.Router();
const BarangController = require("../controllers/barang.controllers");

//routes
router.get("/", BarangController.findAll);
router.post("/", BarangController.store);
router.put("/:id", BarangController.update);
router.delete("/:id", BarangController.destroy);

module.exports = router;
