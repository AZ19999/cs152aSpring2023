const mongoose = require("mongoose");
const subscriberSchema = mongoose.Schema({
  title: { type: String, required: true, },
  description: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  isOnline: { type: Boolean, default: false },
  registrationLink: { type: String },
  organizer: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

subscriberSchema.methods.getInfo = function () {
  return `Name: ${this.name}  Email: ${this.email}  Zip Code: ${this.zipCode}`;
};
subscriberSchema.methods.findLocalSubscribers = function () {
  return this.model("Subscriber").find({ zipCode: this.zipCode }).exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);
