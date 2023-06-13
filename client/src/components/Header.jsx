import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    fetch("http://localhost:4000/profile" , {
      credentials: "include",
    })
  }, [])
  return (
    <header>
      <NavLink to="/">
        <img src="assets/brand-4.png" className="logo" alt="" />
      </NavLink>
      <nav>
        <NavLink to="/login">LOGIN</NavLink>
        <NavLink to="/register">REGISTER</NavLink>
      </nav>
    </header>
  );
}
