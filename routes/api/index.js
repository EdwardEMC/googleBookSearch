const router = require("express").Router();
const bRoutes = require("./books");

router.use("/books", bRoutes);

module.exports = router;