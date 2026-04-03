const express = require("express");
const {
  createTask,
  getMyTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", protect, getMyTasks);
router.get("/:id", protect, getTaskById);
router.post("/", protect, createTask);
router.patch("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

module.exports = router;