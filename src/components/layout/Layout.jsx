import React from "react";
import { Outlet } from "react-router-dom";
import PreHeader from "./PreHeader";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <PreHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
