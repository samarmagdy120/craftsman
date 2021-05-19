import React, { useState } from "react";
import RateAndComment from "../rateAndComment/RateAndComment";
import "./Profilecraftman.css";
import ImageUploader from "react-images-upload";
// import Rating from "../rate/Rating";
import Rate from "../rate/Rate";

const Profilecraftman = () => {
  const state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  };

  const [rating, setRating] = useState(0);
  return (
    <div className="profilecraft">
      <div
        className="container profilecraft-p"
        style={{ height: "500px", display: "inlineBlock", marginTop: "20px" }}
      >
        <div className="row">
          <div className="col-lg-2">
            <div className="wrapper">
              <input type="file" className="my_file" />
            </div>
          </div>
          <div className="col-lg-10">
            <ul
              className="list-unstyled"
              style={{ float: "right", textAlign: "right", marginTop: "25px" }}
            >
              <li>الاسم</li>
              <li>الموبايل</li>
              <li>
                <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                <p>Rating - {rating}</p>{" "}
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
