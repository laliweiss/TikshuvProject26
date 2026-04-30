import { useState, useContext } from "react";
import { login as apiLogin } from "../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

export default function Login() {
  const [id, setId] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const user = await apiLogin(id);

    if (!user) {  alert("משתמש לא נמצא");   return; }

    login(user);

    if (user.role === "teacher") {
      navigate("/teacher/dashboard");
    } else {
      navigate("/location");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="מספר זהות"
      />
      <button>login</button>
    </form>
  );
}