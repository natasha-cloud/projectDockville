const express = require("express");
const { body, validationResult } = require("express-validator");
const batterySubmissionController = require("../controllers/batterySubmission.controller");
const router = express.Router();

// error handling
const errorHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// validation
const validateInput = [
  body("firstname").trim().notEmpty().withMessage("First name is required"),
  body("lastname").trim().notEmpty().withMessage("Last name is required"),
  body("phone").trim().notEmpty().withMessage("Phone number is required"),
  body("nin").trim().notEmpty().withMessage("Nin is required"),
  body("time").trim().notEmpty().withMessage("Time is required"),
  body("date").trim().notEmpty().withMessage("Date is required"),
  body("numberPlate").trim().notEmpty().withMessage("Number plate is required"),
  body("batterySize").trim().notEmpty().withMessage("Battery size is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// new Battery Submission
router.post("/batterySubmissions", validateInput, errorHandler(async (req, res) => {
  // controller function for creating a battery submission
  await batterySubmissionController.create(req, res);
}));

// Retrieve all Battery Submissions
router.get("/batterySubmissions", errorHandler(async (req, res) => {
  // controller function for retrieving all battery submissions
  await batterySubmissionController.findAll(req, res);
}));

// Retrieve a single Battery Submission by ID
router.get("/batterySubmissions/:id", errorHandler(async (req, res) => {
  // controller function for retrieving a single battery submission
  await batterySubmissionController.findOne(req, res);
}));

// Update a Battery Submission by ID
router.put("/batterySubmissions/:id", validateInput, errorHandler(async (req, res) => {
  // controller function for updating a battery submission
  await batterySubmissionController.update(req, res);
}));

// Delete a Battery Submission by ID
router.delete("/batterySubmissions/:id", errorHandler(async (req, res) => {
  // controller function for deleting a battery submission
  await batterySubmissionController.delete(req, res);
}));

// Delete all Battery Submissions
router.delete("/batterySubmissions", errorHandler(async (req, res) => {
  // controller function for deleting all battery submissions
  await batterySubmissionController.deleteAll(req, res);
}));

// Find all Battery Submissions by condition
router.get("/batterySubmissions/condition", errorHandler(async (req, res) => {
  // controller function for finding battery submissions by condition
  await batterySubmissionController.findAllByCondition(req, res);
}));

module.exports = router;
