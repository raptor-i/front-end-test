import React from "react";
import "./Progress.css";
import arrowLeft from "../../images/arrowLeft.svg";

const Progress = () => {
  return (
    <div className="Progress__body">
      <div className="Progress__Top">
        <svg
          className="Progress__Back-Arrow"
          id="Backward_arrow"
          data-name="Backward arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M11.5,0,9.409,2.091l7.916,7.916H0v2.987H17.325L9.409,20.909,11.5,23,23,11.5Z"
            transform="translate(23 23) rotate(180)"
            fill="#0b2554"
          />
        </svg>
        <svg
          className="Progress__Back-text"
          xmlns="http://www.w3.org/2000/svg"
          width="194"
          height="27"
          viewBox="0 0 194 27"
        >
          <text
            id="Back:_Project_concept_"
            data-name="Back: Project concept "
            transform="translate(194 22)"
            fill="#0b2554"
            font-size="20"
            font-family="SegoeUI, Segoe UI"
          >
            <tspan x="-193.291" y="0">
              Back: Project concept{" "}
            </tspan>
          </text>
        </svg>
        <svg
          className="Progress__bar"
          xmlns="http://www.w3.org/2000/svg"
          width="327"
          height="10"
          viewBox="0 0 327 10"
        >
          <g
            id="Progress_1"
            data-name="Progress 1"
            transform="translate(-226 -206)"
          >
            <rect
              id="Rectangle_629"
              data-name="Rectangle 629"
              width="327"
              height="10"
              rx="5"
              transform="translate(226 206)"
              fill="#a3adbe"
            />
            <path
              id="Rectangle_630"
              data-name="Rectangle 630"
              d="M5,0H90a0,0,0,0,1,0,0V10a0,0,0,0,1,0,0H5A5,5,0,0,1,0,5V5A5,5,0,0,1,5,0Z"
              transform="translate(226 206)"
              fill="#0b2554"
            />
          </g>
        </svg>
        <svg
          className="Progress__Next-text"
          xmlns="http://www.w3.org/2000/svg"
          width="156px"
          height="27px"
          viewBox="0 0 156 27"
        >
          <text
            id="Next:Basic_Details"
            data-name="Next:Basic Details"
            transform="translate(156 22)"
            fill="#0b2554"
            font-size="20"
            font-family="SegoeUI, Segoe UI"
          >
            <tspan x="-155.01" y="0">
              Next:Basic Details
            </tspan>
          </text>
        </svg>
        <svg
          className="Progress__Next-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 23 23"
        >
          <g
            id="Backward_arrow"
            data-name="Backward arrow"
            transform="translate(23 23) rotate(180)"
          >
            <path
              id="Path_10"
              data-name="Path 10"
              d="M11.5,0,9.409,2.091l7.916,7.916H0v2.987H17.325L9.409,20.909,11.5,23,23,11.5Z"
              transform="translate(23 23) rotate(180)"
              fill="#0b2554"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Progress;
