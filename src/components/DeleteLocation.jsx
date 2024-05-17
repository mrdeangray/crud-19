import React, { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/LocationProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Msg = styled.p`
  font-size: 24px;
  color: red;
`;

const DeleteLocation = () => {
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

  const handleDelete = (event) => {
    event.preventDefault();

    const newLocations = locations.filter(loc=>loc.id !==id)
    setLocations(newLocations);
    setInputValue("");
    localStorage.setItem("crud-19-locations", JSON.stringify(newLocations));
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/readlocations`);
    }, 2000);
  };


  return (
    <div>
      <Link to={`/readlocations`}>Back</Link>
      <div>
        <button onClick={handleDelete}>Delete {currLocation.name}</button>
      </div>

      {locations.map((loc) => {
        return <span key={loc.id}>{loc.name}, </span>;
      })}
      {isUpdating && <Msg>Updating ...</Msg>}
    </div>
  );
};

export default DeleteLocation;
