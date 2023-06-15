import { NavLink } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContext";


export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <NavLink to="/"><img src="assets/brand-4.png" className="logo" alt="" /></NavLink>
      <nav>
        {username && (
          <>
            <NavLink to="/create">New Post</NavLink>
            <a onClick={logout}>LOGOUT</a>
          </>
        )}
        {!username && (
          <>
            <NavLink to="/login">LOGIN</NavLink>
            <NavLink to="/register">REGISTER</NavLink>
          </>
        )}
      </nav>
    </header>
  );
}
