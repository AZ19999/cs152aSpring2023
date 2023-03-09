const mongoose = require("mongoose");
const subSchema = mongoose.Schema({
  name: String,
  email: String,
  zipCode: Number,
});

module.exports = mongoose.model("subcriber", subSchema);
