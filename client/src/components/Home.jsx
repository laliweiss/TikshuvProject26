import { Outlet } from "react-router-dom";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home-layout">
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}