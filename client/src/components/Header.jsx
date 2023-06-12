import { NavLink } from "react-router-dom";

export default function Header() {
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
