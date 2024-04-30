import "./App.css";
import { useEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { ROUTES } from "./utils/routes";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header />

      {ROUTES.map((route, idx) => (
        <Route
          key={idx}
          exact
          {...route}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
