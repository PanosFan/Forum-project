import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="profile" element={<Profile />} />
            <Route path="login" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route path="register" element={<Register />} />
          </>
        )}
        <Route
          path="*"
          element={user ? <Missing /> : <Navigate to="login" replace={true} />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
