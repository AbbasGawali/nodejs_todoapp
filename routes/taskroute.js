const express = require("express");
const { addtask, getAllTask, updateTask, deleteTask } = require("../controllers/taskcontroller");
const isAuthenticated = require("../middlewares/auth");
const router = express.Router();

router.post("/new", isAuthenticated, addtask);
router.get("/getTask", isAuthenticated, getAllTask);

// router.route("/:id").put(updateTask).delete(deleteTask);

router.put("/:id",isAuthenticated,updateTask);
router.delete("/:id",isAuthenticated,deleteTask);



module.exports = router;