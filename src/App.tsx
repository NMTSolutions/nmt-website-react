import React from "react";
import { Route, Routes as RoutesWrapper } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";

import routes from "./routes/routes";

function App() {
  return (
    <main className="container no-scrollbar">
      <div className="sub-container">
        <NavBar />
        <RoutesWrapper>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </RoutesWrapper>
        <Footer />
      </div>
    </main>
  );
}

export default App;
