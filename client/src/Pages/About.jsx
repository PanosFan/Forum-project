import React from "react";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div className="container">
      About
      <Outlet />
    </div>
  );
};

export default About;
