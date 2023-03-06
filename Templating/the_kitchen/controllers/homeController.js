var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50,
    
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25,

  },
  {
    title: "Object Oriented Orange Juice",
    cost: 10,

  },
];

exports.showCourses = (request, response) => {
  response.render("courses", { offeredCourses: courses });

};

exports.showContact = (request, response) => {

  response.render("contact");

};
exports.postedContactForm = (request, response) => {

  response.render("thanks");

};
