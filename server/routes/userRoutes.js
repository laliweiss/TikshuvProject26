import express from "express";
import {
  registerStudent,
  registerTeacher,
  getAllStudents,
  getAllTeachers,
  getStudentsByClass,
  getUserById
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register/student", registerStudent);
router.post("/register/teacher", registerTeacher);

router.get("/students", getAllStudents);
router.get("/teachers", getAllTeachers);

router.get("/class/:id/students", getStudentsByClass);

router.get("/:id", getUserById);

export default router;