const student = require("../models/student_models");
exports.getAllStudents = (req, res) => {
  try {
    res.json({
      message: "All students retrieved successfully",
      data: student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getStudentById = (req, res) => {
  try {
    const studentId = req.params.id;
    const Student = student.find((s) => s.id === studentId);
    if (!Student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json({
      message: "Student  details retrieved successfully",
      data: Student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createStudent = (req, res) => {
  try {
    const newStudent = req.body;
    student.push(newStudent);
    res.status(201).json({
      message: "Student created successfully",
      data: newStudent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateStudent = (req, res) => {
  try {
    const studentId = req.params.id;
    const Student = student.find((s) => s.id === studentId);
    if (!Student) {
      return res.status(404).json({ message: "Student not found" });
    }
    Object.assign(Student, req.body);
    res.json({
      message: "Student updated successfully",
      data: Student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteStudent = (req, res) => {
  try {
    const studentId = req.params.id;
    const Student = student.find((s) => s.id === studentId);
    if (!Student) {
      return res.status(404).json({ message: "Student not found" });
    }
    student.splice(student.indexOf(Student), 1);
    res.json({
      message: "Student deleted successfully",
      data: Student,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getStudentsByMajor = (req, res) => {
  try {
    const major = req.query.major;
    const studentsByMajor = student.filter((s) => s.major === major);
    res.json({
      message: "Students by major retrieved successfully",
      data: studentsByMajor,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.sendnotification = async (req, res) => {
  try {
    const { title, message, recipient } = req.body;
    if (!title || !message || !recipient) {
      return res.status(400).json({
        success: false,
        message: "Title, message, and recipient are required",
      });
    }
    const newNotification = {
      id: NOTIFICATIONS.length + 1,
      title: title,
      message: message,
      recipient: recipient || "ALL STUDENTS",
      timestamp: new Date().toISOString(),
    };
    NOTIFICATIONS.push(newNotification);

    res.status(201).json({
      success: true,
      message: "Notification sent successfully",
      data: newNotification,
    });
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message });
  }
};
