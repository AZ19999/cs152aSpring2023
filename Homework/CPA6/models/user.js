const mongoose = require("mongoose");
const Subscriber = require("../models/subscriber");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    role: { type: String, enum: ["student, alumni"], default: "student" },
    graduationYear: { type: Number, required: true },
    major: { type: String, required: true },
    job: { type: String },
    company: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    zipCode: { type: Number, min: 10000, max: 99999 },
    bio: { type: String },
    interests: [{ type: String }],
    
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("fullName").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.pre("save", function (next) {
  let user = this;
  if (user.subscribedAccount === undefined) {
    Subscriber.findOne({ email: user.email })
      .then((subscriber) => {
        user.subscribedAccount = subscriber;
        next();
      })
      .catch((error) => {
        console.log(`Error in connecting subscriber: ${error.message}`);
      });
  } else {
    next();
  }
});

module.exports = mongoose.model("User", userSchema);
