import { Outlet } from "react-router-dom";
import PreHeader from "./PreHeader";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <PreHeader />
        <Header />
        <main className="flex-grow-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
