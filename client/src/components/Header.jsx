import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import "../css/header.css";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="main-header">
      <h2 className="logo" onClick={() => navigate("/")}> בית ספר  </h2>

      <nav className="nav-menu">
        {!user && (
          <>
            <NavLink className="nav-link" to="/student">  רישום תלמיד  </NavLink>
            <NavLink className="nav-link" to="/teacher"> רישום מורה  </NavLink>
            <NavLink className="nav-link" to="/login">  התחברות </NavLink>
            <NavLink className="nav-link" to="/map"> מפה  </NavLink>
          </>
        )}

        {user && (
          <>
            <span className="user-welcome"> שלום, <span>{user.firstName}</span> </span>
            <button className="nav-link-btn" onClick={() => navigate("/location")}  > עדכון מיקום </button>
            <NavLink className="nav-link" to="/map">  מפה </NavLink>
            {user.role === "teacher" && (
              <NavLink className="nav-link" to="/teacher/dashboard"> שליפות מורה </NavLink>)}
            <button className="nav-link-btn logout-trigger" onClick={logout} >   התנתקות  </button>
          </>
        )}

      </nav>
    </header>
  );
}