exports.responseWithName = (request, response) => {
    //response.send("Hello, john!");
    response.render("index", {name: request.params.myName});

};

exports.badResponseWithName = (request, response) => { //used to test error handler
    response.render("index", {name: x}); //this gives an error because x is not defined

};

exports.displayForm = (request, response) => {
    response.render("form");

};

exports.oldDisplayForm = (request, response) => { //don't need when implementing ejs stuff
    response.sendFile("/views/form.html", {root: "."});

};

exports.respondWithForm = (request, response) => {
    response.render("index", {name: request.body.myName});

};

///*<%let name = 'class'%>*/ old code from index.ejs, used to have a local var on the page