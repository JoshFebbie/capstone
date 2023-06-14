import "./App.css";
// import Post from "./components/Post";
// import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import Post from "./pages/Post";

function App() {
  return (
    <UserContextProvider>
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="create" element={<Post />}/>
      </Route>
     </Routes>
    </UserContextProvider>
    
  );
}

export default App;
