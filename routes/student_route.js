const express = require("express");
const router = express.Router();
const studentController = require("../controllers/student_controllers");

router.post("/students/search", studentController.sendnotification);
router.get("/students/notifications", studentController.getAllNotifications);
router.get("/students", studentController.getAllStudents);
router.get("/students/search", studentController.getStudentsByMajor);
router.get("/students/:id", studentController.getStudentById);
router.post("/students", studentController.createStudent);
router.put("/students/:id", studentController.updateStudent);
router.delete("/students/:id/name", studentController.deleteStudent);

module.exports = router;
