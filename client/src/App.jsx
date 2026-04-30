import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import StudentRegister from "./components/StudentRegister";
import TeacherRegister from "./components/TeacherRegister";
import MapPage from "./components/MapPage";
import LocationControl from "./components/LocationControl";
import TeacherDashboard from "./components/TeacherDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student" element={<StudentRegister />} />
        <Route path="/teacher" element={<TeacherRegister />} />
        <Route path="/map" element={<MapPage />} />

        <Route
          path="/location"
          element={
            <ProtectedRoute>
              <LocationControl />
            </ProtectedRoute>
          }
        />

        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute role="teacher">
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}