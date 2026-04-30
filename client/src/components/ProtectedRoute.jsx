import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

export default function ProtectedRoute({ children, role }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (role && user.role !== role) {
    if (user.role === "teacher") {
      return <Navigate to="/teacher/dashboard" replace />;
    }

    if (user.role === "student") {
      return <Navigate to="/student/dashboard" replace />;
    }

    return <Navigate to="/" replace />;
  }

  return children;
}