import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/login";
import Register from "../pages/Register/register";
import Home from "../pages/Home/home";
import useAuth  from "../hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed > 0 ? <Item/> : <Login/>
}

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route exact path="/home" element={<Private Item={Home} />}/>
          <Route path="*" element={<Login/>} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
