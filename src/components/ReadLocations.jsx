import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LocationContext } from "../context/LocationProvider";
import Location from "./Location";

const ReadLocations = () => {
  const { locations } = useContext(LocationContext);
  return (
    <div>
      <Link to={`/`}>Back</Link>
      <div className="box">
        <h1 className="box-header">ReadLocations</h1>
        <div className="box-row">
          {locations.map((loc) => {
            return <Location key={loc.id} location={loc} />;
          })}
        </div>
      </div>
      <Link to={`/createlocation`}>
        <button>Create Location</button>
      </Link>
    </div>
  );
};

export default ReadLocations;
