const router = require("express").Router(); 
const submissionRoutes = require("./submissions"); 

router.use("/submissions", submissionRoutes); 

module.exports = router;  