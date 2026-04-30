import pool from "../config/db.js";
import {
  createStudent,
  createTeacher,
  fetchStudentsByClass
} from "../models/userModel.js";

export const getUserById = async (req, res) => {
  const [r] = await pool.execute(
    "SELECT * FROM users WHERE id=?",
    [req.params.id]
  );
  res.json(r[0] || null);
};

export const registerStudent = async (req, res) => {
  await createStudent(req.body);
  res.json({ ok: true });
};

export const registerTeacher = async (req, res) => {
  await createTeacher(req.body);
  res.json({ ok: true });
};

export const getAllStudents = async (req, res) => {
  const [r] = await pool.execute("SELECT * FROM users WHERE role='student'");
  res.json(r);
};

export const getAllTeachers = async (req, res) => {
  const [r] = await pool.execute("SELECT * FROM users WHERE role='teacher'");
  res.json(r);
};

export const getStudentsByClass = async (req, res) => {
  const data = await fetchStudentsByClass(req.params.id);
  res.json(data);
};