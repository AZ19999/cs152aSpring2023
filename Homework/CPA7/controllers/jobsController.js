const Job = require("../models/job");
const User = require("../models/user");
const httpStatus = require("http-status-codes");

module.exports = {
  index: (req, res, next) => {
    Job.find({})
      .then((jobs) => {
        res.locals.jobs = jobs;
        next();
      })
      .catch((error) => {
        console.log(`Error fetching Jobs: ${error.message}`);
        next(error);
      });
  },
  indexView: (req, res) => {
    res.render("jobs/index");
  },
  respondJSON: (req, res) => {
    res.json({
      status: httpStatus.OK,
      data: res.locals,
    });
  },
  errorJSON: (error, req, res, next) => {
    let errorObject;
    if (error) {
      errorObject = {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
    } else {
      errorObject = {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: "Unknown Error.",
      };
    }
    res.json(errorObject);
  },
  join: (req, res, next) => {
    let jobId = req.params.id,
      currentUser = req.user;
    if (currentUser) {
      User.findByIdAndUpdate(currentUser, {
        $addToSet: { jobs: jobId },
      })
        .then(() => {
          res.locals.success = true;
          next();
        })
        .catch((error) => {
          next(error);
        });
    } else {
      next(new Error("User must log in."));
    }
  },
};
