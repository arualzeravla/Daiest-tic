const express = require ("express");
const app = express ();
const path = require ("path");
const methodOverride = require('method-override');

// Initial config
app.set("port", process.env.PORT || 3001);
app.listen (app.get("port"), () => console.log ("Server running in http://localhost:" + app.get("port")));

/************************ Middlewares application importados y nativos ************************/

// Para poder utilizar los contenidos en public y en views respectivamente, sin tener que poner toda la ruta
app.use(express.static (path.resolve (__dirname, "../public")));
app.set('views', path.resolve(__dirname, './views'));

// Para poder tomar la información que viene en el body de un form
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Para poder utilizar otros metodos ademas de GET y POST en las rutas y los forms
app.use(methodOverride("_method"));

// View engine
app.set("view engine", "ejs");


/************************ Routes ************************/

// Main routes
const mainRouter = require("./routes/mainRouter");
app.use("/", mainRouter);

// Products routes
//const productsRouter = require("./routes/products");
//app.use("/productos", productsRouter);

// Usar esta ruta para testear código en las rutas /t/1, /t/2, etc
//const testsRouter = require("./routes/tests");
//app.use("/t", testsRouter);