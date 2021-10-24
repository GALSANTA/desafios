const express = require('express');
const UserController = require("./controllers/UserController");
const router = express.Router();

router.get('/', UserController.list);
router.post('/', UserController.store);

module.exports = router;