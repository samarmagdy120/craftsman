import React, { useState } from "react";
import RateAndComment from "../rateAndComment/RateAndComment";
import "./Profilecraftman.css";
import ImageUploader from "react-images-upload";
import Rating from "../rate/Rating";

const Profilecraftman = () => {
  const state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };

  return (
    <div className="profilecraft">
      <div
        className="container profilecraft-p"
        style={{ height: "500px", display: "inlineBlock" }}
      >
        <div className="row">
          <div className="col-lg-4"></div>
          <div className="col-lg-8">
            <ul className="list-unstyled" style={{ float: "right" }}>
              <li>الاسم</li>
              <li>الموبايل</li>
              <li>
                <Rating />
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <RateAndComment state={state} />
      </div>
    </div>
  );
};

export default Profilecraftman;
