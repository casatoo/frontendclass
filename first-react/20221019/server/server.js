const express = require("express");
const app = express();
const cors = require("cors");
const { response } = require("express");

const DB = {
  장바구니: [],
  test: [],
};

app.use(
  cors({
    origin: true,
  })
);

const port = 4000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/add/cart", (req, res) => {
  DB.장바구니.push(req.query);
  res.send("아이템 넣기 성공");
});
app.get("/delete/cart", (req, res) => {
  console.log(req.query);
  DB.장바구니 = DB.장바구니.filter((item) => item.name !== req.query.name);
  res.send(DB.장바구니);
});

app.get("/myCart", (req, res) => {
  res.send(DB.장바구니);
});

app.listen(port, () => {
  console.log("start Node.js Server");
});
