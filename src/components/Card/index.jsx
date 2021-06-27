import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const colorArr = ["primary-mentor", "secondary"];

function index({ title, name, text, onClick, size, color }) {
  const Style = colorArr.includes(color) ? color : "";
  return (
    <div className="top-container">
      <div className={`${size} ${Style}`} onClick={onClick}>
        <h2>{title}</h2>
        <h4>{name}</h4>
        <p>{text}</p>{" "}
      </div>
    </div>
  );
}

index.propTypes = {};

export default index;
