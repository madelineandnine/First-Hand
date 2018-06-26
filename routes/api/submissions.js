const router = require("express").Router();
const submissionController = require("../../controllers/submissionController");

// Matches with "/api/books"
router.route("/")
  .get(submissionController.findAll)
  .post(submissionController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(submissionController.findById)
  .put(submissionController.update)
  .delete(submissionController.remove);

module.exports = router;
