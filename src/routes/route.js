const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware = require("../middleware/middle")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/user", userController.createUser  )

router.post("/login",middleware.verifyToken ,userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middleware.verifyToken, userController.getUserData)

router.delete("/delet/:userId", userController.deletedUser)

module.exports = router;