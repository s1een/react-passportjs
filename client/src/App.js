import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./app.css";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch("http://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
        if (res.status === 200) {
          const data = await res.json();
          setUser(data.user);
        } else {
          console.log("Auth filed");
          return;
        }
      } catch (error) {
        console.log("Auth filed");
      }
    }
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/post/:id"
          element={user ? <PostPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
