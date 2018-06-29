const router = require("express").Router(); 
const submissionRoutes = require("./submissions"); 

router.use("/api/submissions", submissionRoutes); 

module.exports = router;  