exports.showCourses = (request, response) => {
  response.render("courses", { offeredCourses: courses });

};

exports.showContact = (request, response) => {

  response.render("contact");

};
exports.postedContactForm = (request, response) => {

  response.render("thanks");

};
