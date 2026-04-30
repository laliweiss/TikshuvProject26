import pool from "../config/db.js";

export const createStudent = (d) =>
  pool.execute(
    "INSERT INTO users VALUES (?, ?, ?, 'student', ?)",
    [d.id, d.firstName, d.lastName, d.class_id || null]
  );

export const createTeacher = (d) =>
  pool.execute(
    "INSERT INTO users VALUES (?, ?, ?, 'teacher', ?)",
    [d.id, d.firstName, d.lastName, d.class_id || null]
  );

export const fetchStudentsByClass = async (id) => {
  const [rows] = await pool.execute(
    "SELECT id, firstName, lastName, class_id FROM users WHERE role='student' AND class_id=?",
    [id]
  );
  return rows;
};