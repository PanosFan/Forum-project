import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
