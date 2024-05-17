import React, { useContext, useState } from "react";
import { LocationContext } from "../context/LocationProvider";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const Input = styled.input`
  border: 2px solid blue;
  border-radius: 10px;
  font-size: 24px;
`;

const Msg = styled.p`
  font-size: 24px;
  color: red;
`;

const CreateLocation = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { locations, setLocations } = useContext(LocationContext);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = {};
    location.id = uuid();
    location.score = 0;
    location.name = inputValue;

    const newLocations = [...locations, location];
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

export default CreateLocation;
