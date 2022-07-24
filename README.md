###  BASIC CRUD REST API

---
install & run app

`npm install`

`npm run start` or `npm run dev`

---

**barang**
id : serial, primary key
nama: varchar(50)
deskripsi: text

---

**api endpoints**
GET /api/barang

POST /api/barang 
body json : {"nama": "bantal", "deskripsi": "bukan guling"}

PUT /api/barang/:id
body json : {"nama": "guling", "deskripsi": "bukan bantal"}

DELETE /api/barang/:id


