import React from "react";
import MARVEL from "./MARVEL.jpg";
import PropTypes from "prop-types";

export default function Profile({ fullName, bio, profession, handleName }) {
  return (
    <div>
      <img src={MARVEL} height="300" width="400"></img>
      <h1 style={{ color: "green", fontFamily: "fantasy" }}>
        {" "}
        FullName: {fullName}
      </h1>
      <h2 style={{color:"white"}}> bio: {bio} </h2>
      <h3 style={{color:"white"}}> profession: {profession}</h3>
      <button onClick={handleName}> Name</button>
    </div>
  )
}
Profile.defaultProps = {
  fullName: "someone",
  bio: "something",
  profession: "profession",
  handleName: function handleName() {
    alert(" name of profile user");
  }
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func,
  profession: PropTypes.string,
}
