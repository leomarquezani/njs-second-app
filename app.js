const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

/*app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main-layout",
    extname: "hbs"
  })
);*/ //for handlebar we need to create a new engine
//app.set("view engine", "hbs");
app.set("view engine", "ejs");
//app.set('view engine', 'pug');//set the template engine with express property view engine

//add parser before the routes
app.use(bodyParser.urlencoded({ extended: false })); //dep that helps parsing
app.use(express.static(path.join(__dirname, "public"))); //to use static content like css set this propety and the folder

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
