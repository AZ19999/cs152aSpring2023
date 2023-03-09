exports.responseWithName = (request, response) => {
    response.render("welcome", {name: request.params.myName});

};

exports.displayForm = (request, response) => {
    response.render("form");

};

exports.respondWithForm = (request, response) => {
    response.render("welcome", {name: request.body.myName});

};