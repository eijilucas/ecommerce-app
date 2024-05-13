import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
