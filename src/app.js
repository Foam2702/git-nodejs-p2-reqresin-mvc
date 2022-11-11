const express = require("express"),
  fs = require("fs"),
  hbs = require("express-handlebars"),
  path = require("path"),
  bodyparser = require("body-parser"),
  personR = require("./resources/routers/person.r");
(app = express()), (port = 3000);
app.use(bodyparser.urlencoded({ extended: true }));

app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    defaultLayout: "container.hbs",
  })
);
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.set("views", path.join(__dirname, "resources//views"));
app.use("/person", personR);

app.get("/", (req, res) => {
  res.render("home", { title: "MVC" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
