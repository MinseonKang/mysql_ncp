const express = require("express");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 기본 주소: localhost:PORT/user <- 주의!!
const indexRouter = require("./routes/user");
app.use("/user", indexRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`PORT Number is ${PORT}`);
});
