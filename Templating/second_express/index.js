const express = require("express");
const homeController = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");
const errorController = require("./controllers/errorController");
const port = 3000;
const app = express();

app.set('view engine', 'ejs'); //telling the app to expect a file with .ejs extension
app.use(express.json());
app.use(express.urlencoded());
app.use(layouts);
app.use(express.static('public'));

//routes
app.get('/', homeController.responseWithName);
app.get('/name/:myName', homeController.responseWithName);
app.get('/form', homeController.displayForm);
app.get('/form.html', homeController.oldDisplayForm);
app.post('/', homeController.respondWithForm);

//error handler
//put at the end so errors aren't tripped before the routes can run
app.use(errorController.respondInternalError);
app.use(errorController.respondSourceNotFound);

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);

});