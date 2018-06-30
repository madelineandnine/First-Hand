const router = require("express").Router();
const submissionController = require("../../controllers/submissionController");


router
  .route("/")
  .get(submissionController.findAll)
  .post(submissionController.create);

router
  .route("/:id")
  .get(submissionController.findById)
  .put(submissionController.update)
  .delete(submissionController.remove);

module.exports = router;
