import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../../routes";
import Header from "./Header";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
};

export default DefaultLayout;
