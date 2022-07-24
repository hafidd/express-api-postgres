const db = require("../db");
const BarangService = require("../services/barang.services");

module.exports = {
  findAll: async (req, res) => {
    try {
      const data = await BarangService.getAll();
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json("error");
    }
  },

  store: async (req, res) => {
    try {
      const { nama, deskripsi } = req.body;
      const data = await BarangService.create({ nama, deskripsi });
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json("error insert");
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama, deskripsi } = req.body;
      const data = await BarangService.update({ id, nama, deskripsi });
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json("error update");
    }
  },

  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      await BarangService.delete(id);
      res.json(null);
    } catch (error) {
      console.log(error);
      res.status(400).json("error delete");
    }
  },
};
