import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Home = () => {
  const { currUser, handleSignIn, handleSignOut } = useContext(AuthContext);
  return (
    <div>
      <h1>Home {currUser?.displayName}</h1>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignOut}>Sign Out</button>
      <Link to={`/readlocations`}>
        <button>Read Locations</button>
      </Link>
    </div>
  );
};

export default Home;
