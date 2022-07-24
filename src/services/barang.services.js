const db = require("../db");

module.exports = {
  getAll: async () => {
    try {
      const { rows } = await db.query("SELECT * FROM barangs");
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getById: async (id) => {
    try {
      const { rows } = await db.query("SELECT * FROM barangs WHERE id=$1", [
        parseInt(id),
      ]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  create: async ({ nama, deskripsi }) => {
    try {
      const result = await db.query(
        "INSERT INTO barangs(nama, deskripsi) VALUES ($1, $2) RETURNING *",
        [nama, deskripsi]
      );
      //console.log(result);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  update: async ({ id, nama, deskripsi }) => {
    try {
      const result = await db.query(
        "UPDATE barangs set nama=$1, deskripsi=$2 WHERE id=$3 RETURNING *",
        [nama, deskripsi, parseInt(id)]
      );
      //console.log(result);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

  delete: async (id) => {
    try {
      await db.query("DELETE FROM barangs WHERE id=$1", [parseInt(id)]);
      //console.log(result);
      return null;
    } catch (error) {
      throw error;
    }
  },
};
