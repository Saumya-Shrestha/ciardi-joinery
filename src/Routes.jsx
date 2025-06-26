import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import ContactUs from "./pages/ContactUs";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="about"
            element={<AboutUs />}
          />
          <Route
            path="services"
            element={<Services />}
          />
          <Route
            path="projects"
            element={<Projects />}
          />
          <Route
            path="testimonials"
            element={<Testimonials />}
          />
          <Route
            path="contact"
            element={<ContactUs />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
