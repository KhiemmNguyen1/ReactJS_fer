import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import LinearDeterminate from "../../components/progress/Progress";

export const Product = (props) => {
  const { id, type, title, duration, image } = props.data || {};
  const startDate = duration?.startDate || new Date();
  const endDate = duration?.endDate || new Date();

  // Adjust the month values by subtracting 1
  const formattedStartDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() - 1,
    startDate.getDate()
  );
  const formattedEndDate = new Date(
    endDate.getFullYear(),
    endDate.getMonth() - 1,
    endDate.getDate()
  );

  return (
    <div className="pro" key={id}>
      <img className="pro_img" src={image} alt=""/>

      <div className="des">
        <p>{type}</p>
        <p>
          <FontAwesomeIcon icon={faClock} style={{ color: "#f99b43" }} />{" "}
          {formattedStartDate.toLocaleDateString()} -{" "}
          {formattedEndDate.toLocaleDateString()}
        </p>

        <Link to={`description/${id}`}>
          <h4 style={{fontWeight: "bold"}}>{title}</h4>
        </Link>
      </div>
      <div>
        <div>
          <LinearDeterminate/>
        </div>
      </div>
    </div>
  );
};
