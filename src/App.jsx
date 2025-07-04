import "./App.css";
import AppRoutes from "./Routes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
      delay: 0,
    });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
