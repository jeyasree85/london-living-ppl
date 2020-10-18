const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller")

router.get("/london/users", controller.getLondonUsers)

module.exports = router
