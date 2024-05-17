import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Location = ({ location }) => {
  const [score, setScore] = useState(1);

  useEffect(() => {
    getScore();
  }, []);

  const getScore = async () => {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${location.name}`
      );
      setScore(data.public_repos);
    } catch (error) {}
  };

  return (
    <div>
      <span>{location.name}</span>
      <span>{score}</span>
      <Link to={`/update/${location.id}`}>Update</Link>
      <Link to={`/delete/${location.id}`}>Delete</Link>
    </div>
  );
};

export default Location;
