import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
