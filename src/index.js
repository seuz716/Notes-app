const {express} = require("express");
const app = express();
const path = require("path");
/* express-handlebars view engine uses sensible defaults that leverage 
the "Express-way" of structuring an  app's views. This makes it
 trivial to use in basic apps: */
import exphbs from "express-handlebars";
import methodOverride from "method-override";
import session from "express-session";
import { fileURLToPath } from "url";


//Initializations

const __dirname = dirname(fileURLToPath(import.meta.url));
//Settings
app.set("port", process.env.PORT || 3000);

// __dirname es la ruta al src, pathjoin concatena las ubucaciones de los archivos
app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs(
    // config view engine para las plantillas en handlebars
    {
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: join(app.get("views"), "partials"),
      extname: ".hbs",
    }
  )
);
app.set("view engine", ".hbs");

//Middlewares
app.use(urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "mysecretapp",
    resave: "true",
    saveUninitialized: "true",
  })
);
//Global Variables

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/index'));
app.use(require('./routes/users'));
//Static files

//server is running
app.listen(app.get("port"), () => {
  console.log("Server on Port ", app.get("port"));
});
