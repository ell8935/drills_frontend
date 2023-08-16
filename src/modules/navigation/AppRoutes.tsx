import { BrowserRouter, Route, Routes } from "react-router-dom";
import routesList from "./routesList";
import Header from "../../shared/components/Header/Header";
import NotFound404 from "../auth/screens/NotFound404/NotFound404";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {Object.values(routesList).map(({ Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <ToastContainer position="bottom-left" />
    </BrowserRouter>
  );
};

export default AppRoutes;
