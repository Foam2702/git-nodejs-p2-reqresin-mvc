const app = require("express");
const router = app.Router();
const personC = require("../controllers/person.c");
router.get("/", personC.getAll);

module.exports = router;
