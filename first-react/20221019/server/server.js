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
app.get("/test", (req, res) => {
  DB.test.push("테스트중입니다.");
  console.log(DB.test);
  res.send({
    code: "sucess",
    msg: "테스트 성공",
  });
});

app.get("/myCart", (req, res) => {
  res.send(DB.장바구니);
});

app.listen(port, () => {
  console.log("start Node.js Server");
});
