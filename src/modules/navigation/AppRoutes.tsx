import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesList from "./routesList";
import Header from "../../shared/components/Header/Header";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Object.values(routesList).map(({ Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
