const BASE = "http://localhost:3001/api";

export const login = async (id) =>
  (await fetch(`${BASE}/users/${id}`)).json();

export const getAllStudents = () =>
  fetch(`${BASE}/users/students`).then(r => r.json());

export const getAllTeachers = () =>
  fetch(`${BASE}/users/teachers`).then(r => r.json());

export const getStudentsByClass = async (id) => {
  if (!id) return [];
  const res = await fetch(`${BASE}/users/class/${id}/students`);
  if (!res.ok) return [];
  return res.json();
};


export const registerStudent = (d) =>
  fetch(`${BASE}/users/register/student`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(d)
  });

export const registerTeacher = (d) =>
  fetch(`${BASE}/users/register/teacher`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(d)
  });


export const sendLocation = (d) =>
  fetch(`${BASE}/location`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(d)
  });

export const getLocations = () =>
  fetch(`${BASE}/location`).then(r => r.json());