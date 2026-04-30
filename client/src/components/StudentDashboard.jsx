import { startTracking } from "../utils/locationSimulator";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

export default function StudentDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <button onClick={() => startTracking(user)}> התחלת שידור מיקום  </button>
    </div>
  );
}