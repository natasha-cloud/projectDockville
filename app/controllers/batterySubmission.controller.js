const BatterySubmission = require('./batterySubmission.controller.js'); 

// Creating and Save a new Battery Submission
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstname || !req.body.lastname || !req.body.phone || !req.body.nin ||
      !req.body.time || !req.body.date || !req.body.numberPlate || !req.body.batterySize) {
    return res.status(400).send({ message: "All fields are required!" });
  }

  // Creating a Battery Submission
  const batterySubmission = new BatterySubmission({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone,
    nin: req.body.nin,
    time: req.body.time,
    date: req.body.date,
    numberPlate: req.body.numberPlate,
    batterySize: req.body.batterySize
  });

  // Save Battery Submission in the database
  batterySubmission.save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Battery Submission."
      });
    });
};

// Retrieve all Battery Submissions from the database.
exports.findAll = (req, res) => {
  BatterySubmission.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving battery submissions."
      });
    });
};

// Find a single Battery Submission with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  BatterySubmission.findById(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Battery Submission not found with id " + id });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Battery Submission with id=" + id
      });
    });
};

// Update a Battery Submission by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  BatterySubmission.findByIdAndUpdate(id, req.body, { new: true })
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Battery Submission not found with id " + id });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Battery Submission with id=" + id
      });
    });
};

// Delete a Battery Submission with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  BatterySubmission.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Battery Submission not found with id " + id });
      }
      res.send({ message: "Battery Submission was deleted successfully!" });
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Battery Submission with id=" + id
      });
    });
};

// Delete all Battery Submissions from the database.
exports.deleteAll = (req, res) => {
  BatterySubmission.deleteMany({})
    .then(data => {
      res.send({ message: `${data.deletedCount} Battery Submissions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all battery submissions."
      });
    });
};

// Find all Battery Submissions by condition
exports.findAllByCondition = (req, res) => {
  const condition = req.query; // Use req.query to get the condition from the query parameters

  BatterySubmission.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving battery submissions."
      });
    });
};
