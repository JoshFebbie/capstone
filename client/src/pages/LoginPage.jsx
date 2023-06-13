import { useState } from "react";



export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login(event) {
    event.preventDefault();
    await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    }).then(response => {
      if (response.status === 200) {
        alert("User logged in successfully");
      } else {
        alert("Failed to log in");
      }
    });
  }

  return (
    <form className="login" onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder="username" value={username} onChange={event => setUsername(event.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={event => setPassword(event.target.value)} />
        <button type="submit">Login</button>
    </form>
  )
}