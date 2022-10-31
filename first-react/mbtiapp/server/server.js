const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: true,
  })
);

const mbti = [];

const port = 5000;

app.get("/", (req, res) => {
  console.log(mbti);
});
app.listen(port, () => {
  console.log("?");
});

app.get("/mbti", (req, res) => {
  res.send("여기는 MBTI 값을 리턴해야합니다.");
  console.log(req.query);
  mbti.push(req.query);
});
