const express = require("express");
const app = express();
var cors=require("cors")

app.use(cors())
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/:name", function (req, res) {
  const p = req.params;
  if (p.name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (p.name == "cat") {
    res.json({ sound: "야옹" });
  } else if (p.name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "알수없음" });
  }
});

app.listen(3000);
