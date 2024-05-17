import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/LocationProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
  border: 2px solid blue;
  border-radius: 10px;
  font-size: 24px;
`;

const Msg = styled.p`
  font-size: 24px;
  color: red;
`;

const UpdateLocation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { locations, setLocations } = useContext(LocationContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currLocation, setCurrLocation] = useState("");

  useEffect(() => {
    const curr = locations.find((loc) => loc.id === id);
    setInputValue(curr.name);
    setCurrLocation(curr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newLocations = locations.map((loc) => {
      if (loc.id === id) {
        loc.name = inputValue;
      }
      return loc;
    });
    setLocations(newLocations);
    setInputValue("");
    localStorage.setItem("crud-19-locations", JSON.stringify(newLocations));
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/readlocations`);
    }, 2000);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <Link to={`/readlocations`}>Back</Link>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={handleChange}
          value={inputValue}
          autoFocus
        />
      </form>
      {locations.map((loc) => {
        return <span key={loc.id}>{loc.name}, </span>;
      })}
      {isUpdating && <Msg>Updating ...</Msg>}
    </div>
  );
};

export default UpdateLocation;
