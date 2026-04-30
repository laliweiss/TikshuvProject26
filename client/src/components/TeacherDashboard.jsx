import { useEffect, useMemo, useState, useContext } from "react";
import {
  getAllStudents,
  getAllTeachers,
  getStudentsByClass
} from "../api/api";
import { AuthContext } from "../context/UserContext";

export default function TeacherDashboard() {
  const { user } = useContext(AuthContext);

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [myStudents, setMyStudents] = useState([]);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      const s = await getAllStudents();
      const t = await getAllTeachers();

      setStudents(s || []);
      setTeachers(t || []);

      if (user?.class_id) {
        const mine = await getStudentsByClass(user.class_id);
        setMyStudents(mine || []);
      }
    };

    load();
  }, [user]);

  const data = useMemo(() => {
    let list = [];

    if (filter === "all") list = [...students, ...teachers];
    if (filter === "students") list = students;
    if (filter === "teachers") list = teachers;
    if (filter === "mine") list = myStudents;

    if (!search) return list;

    return list.filter((p) =>
      `${p.firstName} ${p.lastName} ${p.id}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [filter, search, students, teachers, myStudents]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <input
        placeholder="חיפוש"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        <button onClick={() => setFilter("all")}>הכל</button>
        <button onClick={() => setFilter("students")}>תלמידים</button>
        <button onClick={() => setFilter("teachers")}>מורים</button>
        <button onClick={() => setFilter("mine")}>שלי</button>
      </div>

      {data.map((p) => (
        <div key={p.id}>
          {p.firstName} {p.lastName} ({p.role})
        </div>
      ))}
    </div>
  );
}