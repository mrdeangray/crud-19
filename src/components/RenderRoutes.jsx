import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ReadLocations from "./ReadLocations";

import PrivateRoutes from "./PrivateRoutes";
import CreateLocation from "./CreateLocation";

const RenderRoutes = ({ className }) => {

  return (
    <div className={className}>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/createlocation" element={<CreateLocation />} />
          <Route exact path="/readlocations" element={<ReadLocations />} />
        </Route>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default RenderRoutes;
