exports.responseWithName = (request, response) => {
    //response.send("Hello, john!");
    response.render("index", {name: request.params.myName});

};

exports.displayForm = (request, response) => {
    //response.sendFile("/views/form.html", {root: "."});
    response.render("form");

};

exports.oldDisplayForm = (request, response) => {
    response.sendFile("/views/form.html", {root: "."});

};

exports.respondWithForm = (request, response) => {
    response.render("index", {name: request.body.myName});

};

///*<%let name = 'class'%>*/ old code from index.ejs, used to have a local var on the page